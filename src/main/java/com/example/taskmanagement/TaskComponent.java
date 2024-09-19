package com.example.taskmanagement;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.button.ButtonVariant;
import com.vaadin.flow.component.datepicker.DatePicker;
import com.vaadin.flow.component.dialog.Dialog;
import com.vaadin.flow.component.formlayout.FormLayout;
import com.vaadin.flow.component.html.*;
import com.vaadin.flow.component.icon.Icon;
import com.vaadin.flow.component.icon.VaadinIcon;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.orderedlayout.*;
import com.vaadin.flow.component.radiobutton.RadioButtonGroup;
import com.vaadin.flow.component.textfield.TextArea;
import com.vaadin.flow.component.textfield.TextField;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.time.temporal.WeekFields;
import java.util.Arrays;
import java.util.Locale;

public class TaskComponent extends VerticalLayout {

    private Task task;
    private final TaskService taskService;
    private Div dueDateDiv;
    private H3 title;
    private Div description;
    private RadioButtonGroup<String> statusGroup;

    // Adjusted maximum words for title and description
    private static final int MAX_TITLE_WORDS = 3;
    private static final int MAX_DESCRIPTION_WORDS = 15;

    public TaskComponent(Task task, TaskService taskService) {
        this.task = task;
        this.taskService = taskService;
        setupLayout();
    }

    private void setupLayout() {
        setWidth("300px");
        setHeight("400px");
        getStyle()
            .set("border", "1px solid #ccc")
            .set("border-radius", "10px")
            .set("padding", "20px")
            .set("box-shadow", "0 4px 12px rgba(0, 0, 0, 0.1)")
            .set("background-color", "#ffffff")
            .set("box-sizing", "border-box")
            .set("display", "flex")
            .set("flex-direction", "column")
            .set("justify-content", "space-between");

        // Truncated title
        String truncatedTitle = truncateText(task.getTitle(), MAX_TITLE_WORDS);
        title = new H3(truncatedTitle);
        title.getStyle()
            .set("color", "#1976d2")
            .set("font-size", "20px")
            .set("margin", "0")
            .set("text-overflow", "ellipsis")
            .set("white-space", "nowrap")
            .set("overflow", "hidden");

        description = new Div();
        setupDescription();

        dueDateDiv = new Div(); 
        setupDueDateDisplay();
        statusGroup = new RadioButtonGroup<>();
        statusGroup.setLabel("Task Status");
        statusGroup.setItems("Done", "Not Done");
        statusGroup.setValue(task.isCompleted() ? "Done" : "Not Done");
        statusGroup.addValueChangeListener(event -> {
            task.setCompleted("Done".equals(event.getValue()));
            taskService.updateTask(task.getId(), task);
            Notification.show("Task status updated.");
        });

        Button editButton = new Button(VaadinIcon.EDIT.create());
        editButton.getElement().getStyle().set("color", "#1976d2");

        Button deleteButton = new Button(VaadinIcon.TRASH.create());
        deleteButton.getElement().getStyle().set("color", "#f44336");
        deleteButton.addClickListener(e -> {
            taskService.deleteTask(task.getId());
            Notification.show("Task deleted.");
        });

        editButton.addClickListener(e -> openEditDialog());

        HorizontalLayout actionsLayout = new HorizontalLayout(editButton, deleteButton);
        actionsLayout.getStyle().set("padding-top", "10px");

        add(title, description, dueDateDiv, statusGroup, actionsLayout);
    }

    // Handles truncation of task description and adds a Read more link
    private void setupDescription() {
        description.removeAll();  

        String truncatedDescription = truncateText(task.getDescription(), MAX_DESCRIPTION_WORDS);

        Span descriptionText = new Span(truncatedDescription);
        descriptionText.getStyle()
            .set("display", "inline");

        description.add(descriptionText);

        // Add Read more link if description is truncated
        if (task.getDescription().split("\\s+").length > MAX_DESCRIPTION_WORDS) {
            Span ellipsis = new Span("... ");
            ellipsis.getStyle().set("display", "inline");
            description.add(ellipsis);
            Button readMoreButton = new Button("Read more");
            readMoreButton.addThemeVariants(ButtonVariant.LUMO_TERTIARY_INLINE);
            readMoreButton.getStyle()
                .set("color", "#1976d2")
                .set("cursor", "pointer")
                .set("font-weight", "bold")
                .set("padding", "0")
                .set("margin", "0")
                .set("font-size", "inherit")
                .set("text-decoration", "none");

            readMoreButton.addClickListener(e -> openReadMoreDialog());

            description.add(readMoreButton);
        }
    }

    // Sets up the due date display with specified styling
    private void setupDueDateDisplay() {
        dueDateDiv.removeAll(); 

        dueDateDiv.getStyle()
            .set("font-weight", "bold")
            .set("margin-top", "10px");

        LocalDate dueDate = task.getDueDate();
        if (dueDate != null) {
            String dueText = dueDate.format(DateTimeFormatter.ofPattern("yyyy-MM-dd"));
            boolean isDueThisWeek = isDueThisWeek(dueDate);

            Span dueDateSpan = new Span();
            dueDateSpan.getStyle()
                .set("font-size", "16px")
                .set("display", "flex")
                .set("align-items", "center");
                
            Icon calendarIcon = VaadinIcon.CALENDAR.create();
            calendarIcon.getStyle()
                .set("color", "#1976d2")
                .set("margin-right", "5px"); 

            Span dueLabel = new Span("Due:");
            dueLabel.getStyle()
                .set("color", "#1976d2")
                .set("margin-right", "5px");  

            Span dateText = new Span(dueText);
            dateText.getStyle()
                .set("color", isDueThisWeek ? "#ff9800" : "#333");  // Orange if due this week

            dueDateSpan.add(calendarIcon, dueLabel, dateText);

            dueDateDiv.add(dueDateSpan);
        } else {
            Span noDueDateSpan = new Span("No Due Date");
            noDueDateSpan.getStyle()
                .set("color", "#9e9e9e")
                .set("font-size", "16px");

            dueDateDiv.add(noDueDateSpan);
        }
    }

    // Checks if a given date is within the current week
    private boolean isDueThisWeek(LocalDate date) {
        LocalDate now = LocalDate.now();
        WeekFields weekFields = WeekFields.of(Locale.getDefault());

        int currentWeek = now.get(weekFields.weekOfWeekBasedYear());
        int taskWeek = date.get(weekFields.weekOfWeekBasedYear());

        return now.getYear() == date.getYear() && currentWeek == taskWeek;
    }

    // Opens a dialog to display full title and description
    private void openReadMoreDialog() {
        Dialog dialog = new Dialog();

        H2 dialogTitle = new H2(task.getTitle());
        dialogTitle.getStyle()
            .set("color", "#1976d2")
            .set("margin", "0")
            .set("padding-bottom", "10px");

        Div descriptionDiv = new Div();
        descriptionDiv.setText(task.getDescription());
        descriptionDiv.getStyle()
            .set("white-space", "pre-wrap")
            .set("overflow", "auto")
            .set("max-height", "300px");

        Button closeButton = new Button("Close", event -> dialog.close());
        closeButton.getStyle()
            .set("background-color", "#f44336")
            .set("color", "white")
            .set("margin-top", "20px");

        VerticalLayout dialogLayout = new VerticalLayout(dialogTitle, descriptionDiv, closeButton);
        dialogLayout.setPadding(true);
        dialogLayout.setSpacing(true);
        dialogLayout.setAlignItems(Alignment.CENTER);

        dialog.add(dialogLayout);
        dialog.setWidth("400px");
        dialog.open();
    }

    // Opens a dialog for editing the task
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
            new FormLayout.ResponsiveStep("600px", 2)
        );
        formLayout.getStyle().set("padding", "10px");

        Button saveButton = new Button("Save", e -> {
            task.setTitle(titleField.getValue());
            task.setDescription(descriptionField.getValue());
            task.setDueDate(dueDateField.getValue());

            taskService.updateTask(task.getId(), task);
            editDialog.close();
            Notification.show("Task updated.");
            // Update the task component to reflect changes
            updateTask(task);
        });

        saveButton.getStyle().set("background-color", "#4CAF50").set("color", "white");

        VerticalLayout dialogLayout = new VerticalLayout(formLayout, saveButton);
        dialogLayout.setPadding(false);
        dialogLayout.setSpacing(false);
        dialogLayout.setAlignItems(Alignment.CENTER);

        editDialog.add(dialogLayout);
        editDialog.setWidth("400px");
        editDialog.open();
    }

    // Truncates a given text to the specified number of words
    private String truncateText(String text, int maxWords) {
        String[] words = text.split("\\s+");
        if (words.length <= maxWords) {
            return text;
        }
        String[] truncatedWords = Arrays.copyOfRange(words, 0, maxWords);
        return String.join(" ", truncatedWords) + "...";
    }

    // Updates the task component with new task data
    public void updateTask(Task newTask) {
        if (newTask != null) {
            this.task = newTask; // Replace the task reference with the new one

            String truncatedTitle = truncateText(task.getTitle(), MAX_TITLE_WORDS);
            title.setText(truncatedTitle);
            setupDescription(); 
            setupDueDateDisplay(); 
            statusGroup.setValue(task.isCompleted() ? "Done" : "Not Done");
        }
    }

    public Task getTask() {
        return task;
    }
}
