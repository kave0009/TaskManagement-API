package com.example.taskmanagement;
import com.vaadin.flow.component.*;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.dialog.Dialog;
import com.vaadin.flow.component.html.Footer;
import com.vaadin.flow.component.html.H3;
import com.vaadin.flow.component.html.Anchor;
import com.vaadin.flow.component.html.Span;
import com.vaadin.flow.component.icon.VaadinIcon;
import com.vaadin.flow.component.orderedlayout.*;
import com.vaadin.flow.component.radiobutton.RadioButtonGroup;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.component.textfield.TextFieldVariant;
import com.vaadin.flow.data.value.ValueChangeMode;
import com.vaadin.flow.router.Route;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.function.Consumer;

@Route("")
public class MainView extends VerticalLayout {

    private final TaskService taskService;
    private FlexLayout taskLayout;
    private Consumer<TaskEvent> broadcasterListener;

    private TextField searchField;
    private RadioButtonGroup<String> filterGroup;

    @Autowired
    public MainView(TaskService taskService) {
        this.taskService = taskService;

        setSpacing(false);
        setPadding(false);
        setSizeFull();
        getStyle()
                .set("background-color", "#f7f7f7")
                .set("min-height", "100vh")
                .set("padding-bottom", "80px")
                .set("padding-top", "20px");

        // Header with "Task Manager" text
        H3 header = new H3("Task Manager");
        header.getStyle()
                .set("color", "#1976d2")
                .set("font-size", "32px")
                .set("margin", "0")
                .set("padding-bottom", "20px")
                .set("font-weight", "bold");

        // Add Button
        Button addButton = new Button(VaadinIcon.PLUS.create());
        addButton.getStyle()
                .set("background-color", "#1976d2")
                .set("color", "white")
                .set("border-radius", "8px")
                .set("width", "40px")
                .set("height", "40px")
                .set("display", "inline-flex")
                .set("align-items", "center")
                .set("justify-content", "center")
                .set("box-shadow", "0 4px 12px rgba(0, 0, 0, 0.1)")
                .set("cursor", "pointer")
                .set("margin-left", "10px")
                .set("margin-bottom", "10px");  // Added margin-bottom

        addButton.addClickListener(e -> showAddTaskDialog());

        // Search Field
        searchField = new TextField();
        searchField.setPlaceholder("Search tasks...");
        searchField.setWidth("300px");
        searchField.addThemeVariants(TextFieldVariant.MATERIAL_ALWAYS_FLOAT_LABEL);
        searchField.setValueChangeMode(ValueChangeMode.EAGER);  // React to each keystroke
        searchField.addValueChangeListener(e -> filterTasks());

        // Filter Radio Buttons
        filterGroup = new RadioButtonGroup<>();
        filterGroup.setItems("All", "Done", "Not Done");
        filterGroup.setValue("All");
        filterGroup.addValueChangeListener(e -> filterTasks());

        // Header Layout
        HorizontalLayout headerLayout = new HorizontalLayout(header);
        headerLayout.setAlignItems(Alignment.CENTER);
        headerLayout.setJustifyContentMode(JustifyContentMode.CENTER);
        headerLayout.setWidthFull();
        headerLayout.getStyle()
                .set("margin", "0")
                .set("padding", "0");

        // Controls Layout (Add Button, Search, Filter)
        HorizontalLayout controlsLayout = new HorizontalLayout(addButton, searchField, filterGroup);
        controlsLayout.setAlignItems(Alignment.CENTER);
        controlsLayout.setJustifyContentMode(JustifyContentMode.CENTER);
        controlsLayout.setWidthFull();
        controlsLayout.getStyle()
                .set("margin-bottom", "20px");

        add(headerLayout, controlsLayout);

        // Task Layout
        taskLayout = new FlexLayout();
        taskLayout.setWidthFull();
        taskLayout.setHeight("auto");
        taskLayout.getStyle()
                .set("flex-wrap", "wrap")
                .set("justify-content", "center")
                .set("gap", "20px")
                .set("background-color", "#f7f7f7")
                .set("padding-bottom", "100px");

        add(taskLayout);
        showTasks();
        addFooter();

        // Register to Broadcaster for live updates
        broadcasterListener = event -> {
            getUI().ifPresent(ui -> ui.access(() -> {
                if ("TASK_ADDED".equals(event.getEventType())) {
                    Task newTask = event.getTask();
                    if (newTask != null) {
                        TaskComponent taskComponent = new TaskComponent(newTask, taskService);
                        addTaskComponent(taskComponent);
                    }
                } else if ("TASK_UPDATED".equals(event.getEventType())) {
                    updateTaskComponent(event.getTask());
                } else if ("TASK_DELETED".equals(event.getEventType())) {
                    removeTaskComponent(event.getTask().getId());
                }
            }));
        };

        Broadcaster.register(broadcasterListener);
    }

    private void showAddTaskDialog() {
        AddTaskView addTaskView = new AddTaskView(taskService);
        Dialog dialog = new Dialog(addTaskView);
        dialog.setWidth("400px");
        dialog.setHeight("auto");
        dialog.getElement().getStyle()
                .set("box-shadow", "0 6px 20px rgba(0, 0, 0, 0.15)")
                .set("border-radius", "8px");
        dialog.open();
    }

    public void showTasks() {
        taskLayout.removeAll();

        taskService.getAllTasks().forEach(task -> {
            TaskComponent taskComponent = new TaskComponent(task, taskService);
            setupTaskComponent(taskComponent);
            taskLayout.add(taskComponent);
        });
    }

    private void filterTasks() {
        String searchTerm = searchField.getValue().trim().toLowerCase();
        String statusFilter = filterGroup.getValue();

        taskLayout.removeAll();

        taskService.getAllTasks().stream()
                .filter(task -> {
                    boolean matchesSearch = task.getTitle().toLowerCase().contains(searchTerm) ||
                            task.getDescription().toLowerCase().contains(searchTerm);

                    boolean matchesStatus = "All".equals(statusFilter) ||
                            ("Done".equals(statusFilter) && task.isCompleted()) ||
                            ("Not Done".equals(statusFilter) && !task.isCompleted());

                    return matchesSearch && matchesStatus;
                })
                .forEach(task -> {
                    TaskComponent taskComponent = new TaskComponent(task, taskService);
                    setupTaskComponent(taskComponent);
                    taskLayout.add(taskComponent);
                });
    }

    private void setupTaskComponent(TaskComponent taskComponent) {
        taskComponent.getStyle().set("transition", "transform 0.3s, box-shadow 0.3s");
        taskComponent.getElement().addEventListener("mouseover", event -> {
            taskComponent.getStyle()
                    .set("transform", "scale(1.02)")
                    .set("box-shadow", "0 6px 20px rgba(0, 0, 0, 0.15)");
        });
        taskComponent.getElement().addEventListener("mouseout", event -> {
            taskComponent.getStyle()
                    .set("transform", "scale(1)")
                    .set("box-shadow", "0 4px 12px rgba(0, 0, 0, 0.1)");
        });
    }

    private void addTaskComponent(TaskComponent taskComponent) {
        setupTaskComponent(taskComponent);
        taskLayout.add(taskComponent);
    }

    private void updateTaskComponent(Task updatedTask) {
        taskLayout.getChildren()
                .filter(component -> component instanceof TaskComponent &&
                        ((TaskComponent) component).getTask().getId().equals(updatedTask.getId()))
                .findFirst()
                .ifPresent(component -> {
                    TaskComponent taskComponent = (TaskComponent) component;
                    taskComponent.updateTask(updatedTask);
                });
    }

    private void removeTaskComponent(Long taskId) {
        taskLayout.getChildren()
                .filter(component -> component instanceof TaskComponent &&
                        ((TaskComponent) component).getTask().getId().equals(taskId))
                .findFirst()
                .ifPresent(taskLayout::remove);
    }

    private void addFooter() {
        Footer footer = new Footer();
        footer.setWidthFull();
        footer.getStyle()
                .set("background-color", "#f7f7f7")
                .set("border-top", "1px solid #ddd")
                .set("padding", "10px 0")
                .set("text-align", "center")
                .set("position", "fixed")
                .set("bottom", "0")
                .set("left", "0")
                .set("z-index", "1000");

        Span footerText = new Span("Developed by Artin Kaveh using Vaadin, Spring Boot, and MySQL.");
        footerText.getStyle()
                .set("font-size", "14px")
                .set("color", "#666");

        Anchor linkedInLink = new Anchor("https://www.linkedin.com/in/artin-kaveh-5a614431a", "My LinkedIn Profile");
        linkedInLink.setTarget("_blank");
        linkedInLink.getStyle()
                .set("color", "#1976d2")
                .set("text-decoration", "none")
                .set("font-size", "14px")
                .set("margin-left", "10px");

        linkedInLink.getElement().getStyle().set("transition", "color 0.3s");
        linkedInLink.getElement().addEventListener("mouseover", event -> {
            linkedInLink.getStyle().set("color", "#479bd3");
        });
        linkedInLink.getElement().addEventListener("mouseout", event -> {
            linkedInLink.getStyle().set("color", "#1976d2");
        });

        footer.add(footerText, linkedInLink);
        add(footer);
    }

    @Override
    protected void onDetach(DetachEvent detachEvent) {
        Broadcaster.unregister(broadcasterListener);
        super.onDetach(detachEvent);
    }
}
