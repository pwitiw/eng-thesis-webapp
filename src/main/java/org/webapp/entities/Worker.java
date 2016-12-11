package org.webapp.entities;

import org.webapp.utils.Config;
import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;

/**
 * Created by Patryk on 2015-11-01.
 */
@Entity
@Table(name = "workers", schema = Config.frontWitDbSchema,
        uniqueConstraints= @UniqueConstraint(columnNames={"code", "id"}))
public class Worker implements Serializable {

    @Id
    @NotNull
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    @NotNull
    private String name;
    @NotNull
    private String surname;
    @NotNull
    @Column(name = "POSITION_ID")
    private long positionId;
    @NotNull
    private short code;
    @NotNull
    private short active;


//    private List<Event> events;

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

    public long getPositionId() {
        return positionId;
    }

    public void setPositionId(long positionId) {
        this.positionId = positionId;
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

//    @Access(AccessType.PROPERTY)
//    @OneToMany( fetch = FetchType.LAZY,cascade={CascadeType.ALL} )
//    @JoinColumn(name = "worker")
//    public List<Event> getEvents() {
//        return events;
//    }
//
//    public void setEvents(List<Event> events) {
//        this.events = events;
//    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Worker that = (Worker) o;

        if (code != that.code) return false;
        if (id != that.id) return false;
        if (positionId != that.positionId) return false;
        if (name != null ? !name.equals(that.name) : that.name != null) return false;
        return !(surname != null ? !surname.equals(that.surname) : that.surname != null);

    }

    @Override
    public int hashCode() {
        long result = (long) code;
        result = 31 * result + id;
        result = 31 * result + (name != null ? name.hashCode() : 0);
        result = 31 * result + (surname != null ? surname.hashCode() : 0);
        result = 31 * result + positionId;
        return (int) result;
    }
}
