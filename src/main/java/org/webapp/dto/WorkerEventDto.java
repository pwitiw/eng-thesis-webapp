package org.webapp.dto;

import org.webapp.models.EventEntity;
import org.webapp.models.WorkerEntity;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by Patryk on 2016-01-05.
 */
public class WorkerEventDto implements Serializable {

    private String workerName;

    private String workerSurname;

    private List<EventEntity> events;

    public WorkerEventDto(WorkerEntity worker, List<EventEntity> events) {

        this.workerName = worker.getName();
        this.workerSurname = worker.getSurname();
        this.events = events;
    }

    public String getWorkerName() {
        return workerName;
    }

    public void setWorkerName(String name) {
        this.workerName = name;
    }

    public String getWorkerSurname() {
        return workerSurname;
    }

    public void setWorkerSurname(String surname) {
        this.workerSurname = surname;
    }

    public List<EventEntity> getEvents() {
        return events;
    }

    public void setEvents(List<EventEntity> events) {
        this.events = events;
    }
}
