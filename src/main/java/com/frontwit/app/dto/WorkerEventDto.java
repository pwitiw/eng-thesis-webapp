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

    private List<EventDto> events;

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

    public List<EventDto> getEvents() {
        return events;
    }

    public void setEvents(List<EventDto> events) {
        this.events = events;
    }

    public static WorkerEventDto parseWorkerEventDto(Worker worker){

        WorkerEventDto dto = new WorkerEventDto();
        dto.setName(worker.getName());
        dto.setSurname(worker.getSurname());
        dto.setPosition(worker.getPosition().getName());
        dto.setEvents(EventDto.parseEventDtos(worker.getEvents()));
        return dto;
    }
}


