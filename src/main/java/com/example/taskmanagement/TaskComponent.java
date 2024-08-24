package com.example.taskmanagement;

import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.datepicker.DatePicker;
import com.vaadin.flow.component.dialog.Dialog;
import com.vaadin.flow.component.formlayout.FormLayout;
import com.vaadin.flow.component.html.Div;
import com.vaadin.flow.component.html.H3;
import com.vaadin.flow.component.icon.VaadinIcon;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.radiobutton.RadioButtonGroup;
import com.vaadin.flow.component.textfield.TextArea;
import com.vaadin.flow.component.textfield.TextField;
import java.time.LocalDate;

public class TaskComponent extends VerticalLayout {

    private final Task task;
    private final TaskService taskService;
    private Div dueDate;
    private H3 title;
    private Div description;
    private RadioButtonGroup<String> statusGroup;

    public TaskComponent(Task task, TaskService taskService) {
        this.task = task;
        this.taskService = taskService;
        setupLayout();
    }

    private void setupLayout() {
        // Card layout settings
        setWidth("300px");
        setHeight("400px");
        getStyle().set("border", "1px solid #ccc")
                  .set("border-radius", "10px")
                  .set("padding", "20px")
                  .set("box-shadow", "0 4px 12px rgba(0, 0, 0, 0.1)")
                  .set("background-color", "#ffffff")
                  .set("box-sizing", "border-box")
                  .set("display", "flex")
                  .set("flex-direction", "column")
                  .set("justify-content", "space-between");

        title = new H3(task.getTitle());
        title.getStyle().set("color", "#1976d2")
                        .set("font-size", "20px")
                        .set("margin", "0");

        description = new Div();
        description.setText(task.getDescription());
        description.getStyle().set("margin", "10px 0");

        dueDate = new Div();
        dueDate.setText("Due Date: " + (task.getDueDate() != null ? task.getDueDate().toString() : "No Due Date"));
        dueDate.getStyle().set("font-weight", "bold")
                         .set("margin-bottom", "10px");

        statusGroup = new RadioButtonGroup<>();
        statusGroup.setLabel("Task Status");
        statusGroup.setItems("Done", "Not Done");
        statusGroup.setValue(task.isCompleted() ? "Done" : "Not Done");
        statusGroup.addValueChangeListener(event -> {
            task.setCompleted("Done".equals(event.getValue()));
            taskService.updateTask(task.getId(), task);
            Notification.show("Task status updated.");
            refreshTasks();
        });

        Button editButton = new Button(VaadinIcon.EDIT.create());
        editButton.getElement().getStyle().set("color", "blue");

        Button deleteButton = new Button(VaadinIcon.TRASH.create());
        deleteButton.getElement().getStyle().set("color", "red");

        deleteButton.addClickListener(e -> {
            taskService.deleteTask(task.getId());
            Notification.show("Task deleted.");

            // Immediately remove the TaskComponent from the UI
            this.getParent().ifPresent(parent -> {
                parent.getElement().removeChild(this.getElement());
            });
        });

        editButton.addClickListener(e -> openEditDialog());

        HorizontalLayout actionsLayout = new HorizontalLayout(editButton, deleteButton);
        actionsLayout.getStyle().set("padding-top", "10px");

        // Add components to card
        add(title, description, dueDate, statusGroup, actionsLayout);
    }

    private void openEditDialog() {
        Dialog editDialog = new Dialog();
        editDialog.setHeaderTitle("Edit Task");

        TextField titleField = new TextField("Title");
        titleField.setValue(task.getTitle());
        TextArea descriptionField = new TextArea("Description");
        descriptionField.setValue(task.getDescription());
        DatePicker dueDateField = new DatePicker("Due Date");
        dueDateField.setValue(task.getDueDate());

        FormLayout formLayout = new FormLayout();
        formLayout.add(titleField, descriptionField, dueDateField);
        formLayout.setResponsiveSteps(
                new FormLayout.ResponsiveStep("0", 1),
                new FormLayout.ResponsiveStep("600px", 2),
                new FormLayout.ResponsiveStep("1000px", 3)
        );
        formLayout.getStyle().set("padding", "10px");

        Button saveButton = new Button("Save", e -> {
            // Update task object with new values
            task.setTitle(titleField.getValue());
            task.setDescription(descriptionField.getValue());
            task.setDueDate(dueDateField.getValue());

            // Save task using task service
            taskService.updateTask(task.getId(), task);
            
            // Update UI components instantly
            title.setText(task.getTitle());
            description.setText(task.getDescription());
            updateDueDate(task.getDueDate());
            
            editDialog.close();
            Notification.show("Task updated.");
        });

        saveButton.getStyle().set("background-color", "#4CAF50").set("color", "white");
        VerticalLayout dialogLayout = new VerticalLayout(formLayout, saveButton);
        dialogLayout.setPadding(false);
        dialogLayout.setSpacing(false);
        dialogLayout.setAlignItems(Alignment.CENTER);

        editDialog.add(dialogLayout);
        editDialog.open();
    }

    private void updateDueDate(LocalDate newDueDate) {
        dueDate.setText("Due Date: " + (newDueDate != null ? newDueDate.toString() : "No Due Date"));
    }

    private void refreshTasks() {
        getParent().ifPresent(parent -> ((MainView) parent).showTasks());
    }
}
