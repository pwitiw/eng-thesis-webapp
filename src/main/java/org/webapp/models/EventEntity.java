package org.webapp.models;

import org.webapp.utils.Config;

import javax.persistence.*;
import java.io.Serializable;
import java.sql.Timestamp;

/**
 * Created by Patryk on 2015-11-19.
 */
@Entity
@Table(name = "events", schema = Config.frontWitDbSchema)
public class EventEntity implements Serializable{

    public PrimaryKeyEvents getPrim() {
        return prim;
    }

    public void setPrim(PrimaryKeyEvents prim) {
        this.prim = prim;
    }
    @EmbeddedId
    PrimaryKeyEvents prim;

    @Column(name = "WORKER_ID")
    private short workerId;

    private Timestamp date;

    private int missing;

    public short getWorkerId() {
        return workerId;
    }

    public void setWorkerId(short workerCode) {
        this.workerId = workerCode;
    }

    public Timestamp getDate() {
        return date;
    }

    public void setDate(Timestamp date) {
        this.date = date;
    }

    public int getMissing() {
        return missing;
    }

    public void setMissing(int missing) {
        this.missing = missing;
    }
}
