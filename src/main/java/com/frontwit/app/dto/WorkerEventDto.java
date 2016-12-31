package com.frontwit.app.dto;

import com.frontwit.app.entities.Event;
import com.frontwit.app.entities.Worker;

import java.io.Serializable;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by Patryk on 2016-01-05.
 */
public class WorkerEventDto implements Serializable {

    private String name;

    private String surname;

    private String position;

    private List<EventLimited> events;

    public WorkerEventDto(Worker worker, List<Event> events) {
        this.name = worker.getName();
        this.surname = worker.getSurname();
        this.position = worker.getPosition().getName();
        this.events = new ArrayList<>(EventLimited.convertEvents(events));
    }

    public String getName() {
        return name;
    }

    public String getSurname() {
        return surname;
    }

    public String getPosition() {
        return position;
    }

    public List<EventLimited> getEvents() {
        return events;
    }
}


