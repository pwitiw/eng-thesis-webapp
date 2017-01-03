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

    public WorkerDto() {
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
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

    public short getCode() {
        return code;
    }

    public void setCode(short code) {
        this.code = code;
    }

    public short getActive() {
        return active;
    }

    public void setActive(short active) {
        this.active = active;
    }

    @Override
    public String toString() {
        return "Pracownik: " + getName() + " " + getSurname() + ", pozycja: " + getPosition();
    }
}
