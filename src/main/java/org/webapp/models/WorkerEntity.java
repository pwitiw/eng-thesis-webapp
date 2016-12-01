package org.webapp.models;

import org.webapp.utils.Config;
import javax.persistence.*;
import java.io.Serializable;

/**
 * Created by Patryk on 2015-11-01.
 */
@Entity
@Table(name = "workers", schema = Config.frontWitDbSchema)
public class WorkerEntity implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    private String name;

    private String surname;
    @Column(name = "position_id")
    private int positionId;

    private short code;

    private short active;

//    @OneToMany(fetch = FetchType.LAZY, mappedBy = "worker")
//    @JsonManagedReference
//    private List<EventEntity> events;

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

    public int getPositionId() {
        return positionId;
    }

    public void setPositionId(int positionId) {
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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        WorkerEntity that = (WorkerEntity) o;

        if (code != that.code) return false;
        if (id != that.id) return false;
        if (positionId != that.positionId) return false;
        if (name != null ? !name.equals(that.name) : that.name != null) return false;
        return !(surname != null ? !surname.equals(that.surname) : that.surname != null);

    }

    @Override
    public int hashCode() {
        int result = (int) code;
        result = 31 * result + id;
        result = 31 * result + (name != null ? name.hashCode() : 0);
        result = 31 * result + (surname != null ? surname.hashCode() : 0);
        result = 31 * result + positionId;
        return result;
    }
}
