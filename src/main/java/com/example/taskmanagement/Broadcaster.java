package com.example.taskmanagement;
import java.util.concurrent.CopyOnWriteArraySet;
import java.util.concurrent.Executor;
import java.util.concurrent.Executors;
import java.util.function.Consumer;

public class Broadcaster {
    static Executor executor = Executors.newCachedThreadPool();
    static CopyOnWriteArraySet<Consumer<TaskEvent>> listeners = new CopyOnWriteArraySet<>();

    public static void broadcast(TaskEvent event) {
        for (Consumer<TaskEvent> listener : listeners) {
            executor.execute(() -> listener.accept(event));
        }
    }

    public static void register(Consumer<TaskEvent> listener) {
        listeners.add(listener);
    }

    public static void unregister(Consumer<TaskEvent> listener) {
        listeners.remove(listener);
    }
}
