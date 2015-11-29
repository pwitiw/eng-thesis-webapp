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

    public short getCode() {
        return code;
    }

    public void setCode(short code) {
        this.code = code;
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


    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        WorkerEntity that = (WorkerEntity) o;

        if (code != that.code) return false;
        if (id != that.id) return false;
        if (position != that.position) return false;
        if (name != null ? !name.equals(that.name) : that.name != null) return false;
        return !(surname != null ? !surname.equals(that.surname) : that.surname != null);

    }

    @Override
    public int hashCode() {
        int result = (int) code;
        result = 31 * result + id;
        result = 31 * result + (name != null ? name.hashCode() : 0);
        result = 31 * result + (surname != null ? surname.hashCode() : 0);
        result = 31 * result + position;
        return result;
    }
}
