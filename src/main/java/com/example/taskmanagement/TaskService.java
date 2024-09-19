package com.example.taskmanagement;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TaskService {

    @Autowired
    private TaskRepository taskRepository;

    public Task save(Task task) {
        Task savedTask = taskRepository.save(task);
        Broadcaster.broadcast(new TaskEvent("TASK_ADDED", savedTask));
        return savedTask;
    }

    public Optional<Task> getTaskById(Long id) {
        return taskRepository.findById(id);
    }

    public Task updateTask(Long id, Task taskDetails) {
        Task task = getTaskById(id).orElseThrow(() -> new RuntimeException("Task not found"));
        task.setTitle(taskDetails.getTitle());
        task.setDescription(taskDetails.getDescription());
        task.setCompleted(taskDetails.isCompleted());
        task.setDueDate(taskDetails.getDueDate());
        Task updatedTask = taskRepository.save(task);

        Broadcaster.broadcast(new TaskEvent("TASK_UPDATED", updatedTask));
        return updatedTask;
    }

    public void deleteTask(Long id) {
        taskRepository.deleteById(id);
        Task deletedTask = new Task();
        deletedTask.setId(id);
        Broadcaster.broadcast(new TaskEvent("TASK_DELETED", deletedTask));
    }

    public List<Task> getAllTasks() {
        return taskRepository.findAll();
    }

    public Task findByTitle(String title) {
        return taskRepository.findByTitle(title);
    }
}
