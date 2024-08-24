FROM openjdk:17-jdk-slim
VOLUME /tmp
ARG JAVA_OPTS
ENV JAVA_OPTS=$JAVA_OPTS
COPY build/libs/taskmanagement-0.0.1-SNAPSHOT.jar taskmanagementapi.jar
EXPOSE 8080
EXPOSE 5005 
ENTRYPOINT ["java", "-Djava.security.egd=file:/dev/./urandom", "-agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=*:5005", "-jar", "taskmanagementapi.jar"]
