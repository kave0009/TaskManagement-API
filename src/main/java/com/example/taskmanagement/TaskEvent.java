package com.example.taskmanagement;

public class TaskEvent {
    private String eventType; 
    private Task task;

    public TaskEvent(String eventType, Task task) {
        this.eventType = eventType;
        this.task = task;
    }

    public String getEventType() {
        return eventType;
    }

    public Task getTask() {
        return task;
    }
}
