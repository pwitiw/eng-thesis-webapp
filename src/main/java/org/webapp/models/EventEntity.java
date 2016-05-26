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

    String order_local;

    @Column(name = "worker_code")
    private short workerCode;

    private Timestamp date;

    private int missing;

    public String getOrder_local() {
        return order_local;
    }

    public void setOrder_local(String order_local) {
        this.order_local = order_local;
    }

    public short getWorkerCode() {
        return workerCode;
    }

    public void setWorkerCode(short workerCode) {
        this.workerCode = workerCode;
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
