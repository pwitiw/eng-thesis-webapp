package com.frontwit.app.dto;

import com.frontwit.app.entities.Worker;

import java.io.Serializable;

/**
 * Created by Patryk on 17.12.2016.
 */
public class WorkerDto implements Serializable {

    private long id;
    private String name;
    private String surname;
    private String position;
    private short code;
    private short active;

    public WorkerDto(Worker worker) {
        this.id = worker.getId();
        this.name = worker.getName();
        this.surname = worker.getSurname();
        this.position = worker.getPosition().getName();
        this.code = worker.getCode();
        this.active = worker.getActive();
    }

    public long getId() {
        return id;
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

    public short getCode() {
        return code;
    }

    public short getActive() {
        return active;
    }
}
