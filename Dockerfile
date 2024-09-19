# Use a specific OpenJDK image that supports both architectures
FROM openjdk:17-jdk-slim

# Create a temporary volume
VOLUME /tmp

# Copy the JAR file to the container
COPY build/libs/taskmanagement-0.0.1-SNAPSHOT.jar taskmanagementapi.jar

# Expose the application port
EXPOSE 8080

# Entry point to run the application
ENTRYPOINT ["java", "-jar", "taskmanagementapi.jar"]
