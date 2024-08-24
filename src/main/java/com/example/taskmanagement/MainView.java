package com.example.taskmanagement;

import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.dialog.Dialog;
import com.vaadin.flow.component.icon.VaadinIcon;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.html.Footer;
import com.vaadin.flow.component.html.H3;
import com.vaadin.flow.component.html.Anchor;
import com.vaadin.flow.component.html.Span;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.orderedlayout.FlexLayout;
import com.vaadin.flow.data.binder.Binder;
import com.vaadin.flow.router.Route;
import org.springframework.beans.factory.annotation.Autowired;

@Route("")
public class MainView extends VerticalLayout {

    private final TaskService taskService;
    private final Binder<Task> binder = new Binder<>(Task.class);

    @Autowired
    public MainView(TaskService taskService) {
        this.taskService = taskService;

        setSpacing(false);
        setPadding(false);
        setSizeFull();
        getStyle().set("background-color", "#f7f7f7")
                  .set("min-height", "100vh")
                  .set("padding-bottom", "80px")  
                  .set("padding-top", "20px");

        H3 header = new H3("Task Manager");
        header.getStyle().set("color", "#1976d2")
                         .set("font-size", "32px")
                         .set("margin", "20px 20px") 
                         .set("padding-bottom", "20px")  
                         .set("font-weight", "bold");

        Button addButton = new Button(VaadinIcon.PLUS.create());
        addButton.getStyle().set("background-color", "#1976d2")
                            .set("color", "white")
                            .set("border-radius", "8px")
                            .set("width", "32px")
                            .set("height", "32px")
                            .set("display", "inline-flex")
                            .set("align-items", "center")
                            .set("justify-content", "center")
                            .set("box-shadow", "0 4px 12px rgba(0, 0, 0, 0.1)")
                            .set("cursor", "pointer")
                            .set("margin-left", "10px")
                            .set("margin", "20px 10px");

        addButton.getElement().getStyle().set("transition", "transform 0.3s, box-shadow 0.3s, background-color 0.3s");
        addButton.getElement().addEventListener("mouseover", event -> {
            addButton.getStyle().set("transform", "scale(1.1)")
                                .set("box-shadow", "0 6px 20px rgba(0, 0, 0, 0.2)")
                                .set("background-color", "#1a90ff");
        });
        addButton.getElement().addEventListener("mouseout", event -> {
            addButton.getStyle().set("transform", "scale(1)")
                                .set("box-shadow", "0 4px 12px rgba(0, 0, 0, 0.1)")
                                .set("background-color", "#1976d2");
        });

        HorizontalLayout headerLayout = new HorizontalLayout(header, addButton);
        headerLayout.setAlignItems(Alignment.CENTER);
        headerLayout.setJustifyContentMode(JustifyContentMode.CENTER);
        headerLayout.setWidthFull();
        headerLayout.getStyle().set("margin", "20px");
        headerLayout.getStyle().set("margin-bottom", "20px"); 

        add(headerLayout);
        showTasks();
        addFooter();
    }

    private void showAddTaskDialog() {
        AddTaskView addTaskView = new AddTaskView(taskService);
        Dialog dialog = new Dialog(addTaskView);
        dialog.setWidth("400px");
        dialog.setHeight("auto");
        dialog.getElement().getStyle().set("box-shadow", "0 6px 20px rgba(0, 0, 0, 0.15)");
        dialog.getElement().getStyle().set("border-radius", "8px");
        dialog.open();
    }

    private void addTask() {
        Task task = new Task();
        binder.bindInstanceFields(this);
        if (binder.writeBeanIfValid(task)) {
            taskService.save(task);
            Notification.show("Task added", 3000, Notification.Position.TOP_CENTER);
            showTasks();
        } else {
            Notification.show("Task could not be added", 3000, Notification.Position.TOP_CENTER);
        }
    }

    public void showTasks() {
        removeAll();

        H3 header = new H3("Task Manager");
        header.getStyle().set("color", "#1976d2")
                         .set("font-size", "32px")
                         .set("margin", "10px 0")  
                         .set("font-weight", "bold");

        Button addButton = new Button(VaadinIcon.PLUS.create());
        addButton.getStyle().set("background-color", "#1976d2")
                            .set("color", "white")
                            .set("border-radius", "8px")
                            .set("width", "32px")
                            .set("height", "32px")
                            .set("display", "inline-flex")
                            .set("align-items", "center")
                            .set("justify-content", "center")
                            .set("box-shadow", "0 4px 12px rgba(0, 0, 0, 0.1)")
                            .set("cursor", "pointer")
                            .set("margin-left", "10px")
                            .set("margin-top", "10px");

        addButton.getElement().getStyle().set("transition", "transform 0.3s, box-shadow 0.3s, background-color 0.3s");
        addButton.getElement().addEventListener("mouseover", event -> {
            addButton.getStyle().set("transform", "scale(1.1)")
                                .set("box-shadow", "0 6px 20px rgba(0, 0, 0, 0.2)")
                                .set("background-color", "#1a90ff");
        });
        addButton.getElement().addEventListener("mouseout", event -> {
            addButton.getStyle().set("transform", "scale(1)")
                                .set("box-shadow", "0 4px 12px rgba(0, 0, 0, 0.1)")
                                .set("background-color", "#1976d2");
        });

        addButton.addClickListener(e -> showAddTaskDialog());

        HorizontalLayout headerLayout = new HorizontalLayout(header, addButton);
        headerLayout.setAlignItems(Alignment.CENTER);
        headerLayout.setJustifyContentMode(JustifyContentMode.CENTER);
        headerLayout.setWidthFull();
        headerLayout.getStyle().set("margin-top", "20px");
        headerLayout.getStyle().set("margin-bottom", "20px"); 

        header.getElement().getStyle().set("transition", "color 0.3s");
        header.getElement().addEventListener("mouseover", event -> {
            header.getStyle().set("color", "#479bd3"); 
        });
        header.getElement().addEventListener("mouseout", event -> {
            header.getStyle().set("color", "#1976d2"); 
        });

        add(headerLayout);

        FlexLayout taskLayout = new FlexLayout();
        taskLayout.setWidthFull();
        taskLayout.setHeight("auto");  
        taskLayout.getStyle().set("flex-wrap", "wrap");
        taskLayout.getStyle().set("justify-content", "center");
        taskLayout.getStyle().set("gap", "20px");
        taskLayout.getStyle().set("background-color", "#f7f7f7");
        taskLayout.getStyle().set("padding-bottom", "100px");

        taskService.getAllTasks().forEach(task -> {
            TaskComponent taskComponent = new TaskComponent(task, taskService);
            taskComponent.getStyle().set("transition", "transform 0.3s, box-shadow 0.3s");
            taskComponent.getElement().addEventListener("mouseover", event -> {
                taskComponent.getStyle().set("transform", "scale(1.02)");
                taskComponent.getStyle().set("box-shadow", "0 6px 20px rgba(0, 0, 0, 0.15)");
            });
            taskComponent.getElement().addEventListener("mouseout", event -> {
                taskComponent.getStyle().set("transform", "scale(1)");
                taskComponent.getStyle().set("box-shadow", "0 4px 12px rgba(0, 0, 0, 0.1)");
            });

            taskLayout.add(taskComponent);
        });

        add(taskLayout);
    }

    private void addFooter() {
        Footer footer = new Footer();
        footer.setWidthFull();
        footer.getStyle().set("background-color", "#f7f7f7")
                         .set("border-top", "1px solid #ddd")
                         .set("padding", "10px 0")
                         .set("text-align", "center")
                         .set("position", "fixed")
                         .set("bottom", "0")
                         .set("left", "0")
                         .set("z-index", "1000");

        Span footerText = new Span("Developed by Artin Kaveh using Vaadin, Spring Boot, and MySQL.");
        footerText.getStyle().set("font-size", "14px")
                            .set("color", "#666");

        Anchor linkedInLink = new Anchor("https://www.linkedin.com/in/artin-kaveh-5a614431a", "My LinkedIn Profile");
        linkedInLink.setTarget("_blank");  
        linkedInLink.getStyle().set("color", "#1976d2")
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
}
