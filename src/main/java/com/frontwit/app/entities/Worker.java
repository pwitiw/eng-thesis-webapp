package com.frontwit.app.entities;

import com.frontwit.app.utils.Config;
import org.hibernate.validator.constraints.Range;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.util.List;

/**
 * Created by Patryk on 2015-11-01.
 */
@Entity
@Table(name = "workers", schema = Config.FRONTWIT_DB_SCHEMA,
        uniqueConstraints = @UniqueConstraint(columnNames = {"code", "id"}))
public class Worker implements Serializable {

    @Id
    @NotNull
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @NotNull
    private String name;

    @NotNull
    private String surname;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "POSITION_ID")
    private Position position;

    @NotNull
   // @Range(min = 100, max=999)
    private short code;

    @NotNull
    private short active = 1;

    @OneToMany(mappedBy = "worker", fetch = FetchType.LAZY)
    private List<Event> events;

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

    public Position getPosition() {
        return position;
    }

    public void setPosition(Position position) {
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

    public List<Event> getEvents() {
        return events;
    }

    public void setEvents(List<Event> events) {
        this.events = events;
    }

    @Override
    public String toString() {
        return name + " " + surname;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Worker worker = (Worker) o;

        if (id != worker.id) return false;
        if (code != worker.code) return false;
        if (active != worker.active) return false;
        if (name != null ? !name.equals(worker.name) : worker.name != null) return false;
        if (surname != null ? !surname.equals(worker.surname) : worker.surname != null) return false;
        return position != null ? position.equals(worker.position) : worker.position == null;

    }

    @Override
    public int hashCode() {
        int result = (int) (id ^ (id >>> 32));
        result = 31 * result + (name != null ? name.hashCode() : 0);
        result = 31 * result + (surname != null ? surname.hashCode() : 0);
        result = 31 * result + (position != null ? position.hashCode() : 0);
        result = 31 * result + (int) code;
        result = 31 * result + (int) active;
        return result;
    }

}
