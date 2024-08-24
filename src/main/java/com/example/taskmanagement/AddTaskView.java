package com.example.taskmanagement;

import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.datepicker.DatePicker;
import com.vaadin.flow.component.dialog.Dialog;
import com.vaadin.flow.component.formlayout.FormLayout;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.data.binder.Binder;
import com.vaadin.flow.data.binder.ValidationResult;
import com.vaadin.flow.data.binder.ValueContext;

public class AddTaskView extends VerticalLayout {

    private final TaskService taskService;

    private TextField title = new TextField("Title");
    private TextField description = new TextField("Description");
    private DatePicker dueDate = new DatePicker("Due Date");

    private Binder<Task> binder = new Binder<>(Task.class);

    public AddTaskView(TaskService taskService) {
        this.taskService = taskService;

        // Binding and validation 
        binder.forField(title)
            .asRequired("Title is required")
            .withValidator(this::validateUniqueTitle)
            .bind(Task::getTitle, Task::setTitle);

        binder.forField(description)
            .asRequired("Description is required")
            .bind(Task::getDescription, Task::setDescription);

        binder.forField(dueDate)
            .asRequired("Due date is required")
            .bind(Task::getDueDate, Task::setDueDate);

        Button save = new Button("Add Task", e -> {
            Task task = new Task();
            if (binder.writeBeanIfValid(task)) {
                taskService.save(task);
                Notification.show("Task added successfully", 3000, Notification.Position.TOP_CENTER);
                closeDialog();
            } else {
                Notification.show("Please correct the errors", 3000, Notification.Position.TOP_CENTER);
            }
        });

        Button cancel = new Button("Cancel", e -> closeDialog());
        FormLayout formLayout = new FormLayout();
        formLayout.add(title, description, dueDate);
        add(formLayout, new HorizontalLayout(save, cancel));
    }

    private ValidationResult validateUniqueTitle(String title, ValueContext context) {
        if (taskService.findByTitle(title) != null) {
            return ValidationResult.error("Task title must be unique");
        }
        return ValidationResult.ok();
    }

    private void closeDialog() {
        this.getParent().ifPresent(parent -> {
            if (parent instanceof Dialog) {
                ((Dialog) parent).close();
            }
        });
    }
}
