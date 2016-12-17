package com.frontwit.app.dto;

import com.frontwit.app.entities.Event;
import com.frontwit.app.entities.Worker;

import java.io.Serializable;
import java.util.List;

/**
 * Created by Patryk on 2016-01-05.
 */
public class WorkerEventDto implements Serializable {

    private String name;

    private String surname;

    private String position;

    private List<Event> events;

    public WorkerEventDto(Worker worker, List<Event> events) {

        this.name = worker.getName();
        this.surname = worker.getSurname();
        this.position = "TESTO";//todo Pozycje przypisac
        this.events = events;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        this.position = position;
    }

    public List<Event> getEvents() {
        return events;
    }

    public void setEvents(List<Event> events) {
        this.events = events;
    }
}
