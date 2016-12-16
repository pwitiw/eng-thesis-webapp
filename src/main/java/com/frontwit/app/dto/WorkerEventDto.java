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

    private String workerSurname;

    private List<Event> events;

    public WorkerEventDto(Worker worker, List<Event> events) {

        this.name = worker.getName();
        this.workerSurname = worker.getSurname();
        this.events = events;
    }


}
