package org.webapp.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

/**
 * Created by Patryk on 2015-11-01.
 */
@Entity(name = "workers")
public class WorkerEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private short code;

    private int id;

    private String name;

    private String surname;

    private int position;

    public int getCode() {
        return code;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
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

    public int getPosition() {
        return position;
    }

    public void setPosition(int position) {
        this.position = position;
    }
}
