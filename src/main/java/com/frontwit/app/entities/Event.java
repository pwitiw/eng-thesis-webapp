package com.frontwit.app.entities;

import com.frontwit.app.utils.Config;

import javax.persistence.*;
import java.io.Serializable;
import java.sql.Timestamp;
import java.util.Date;

/**
 * Created by Patryk on 2015-11-19.
 */
@Entity
@Table(name = "events", schema = Config.FRONTWIT_DB_SCHEMA)
public class Event implements Serializable {

    @EmbeddedId
    EventPrimaryKey prim;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "WORKER_ID", updatable = false)
    private Worker worker;

    private Date date;

    private int missing;

    public Event() {
    }

    public Event(Order order, Worker worker) {

        this.prim = new EventPrimaryKey();
        this.worker = worker;
        this.date = new Date();
        this.missing = order.getMissingAmount(); //todo tutaj jak np drugi raz jest missing to wywali sie
        this.prim.setOrder(order);
        this.prim.setPosition(worker.getPosition());
    }

    public EventPrimaryKey getPrim() {
        return prim;
    }

    public void setPrim(EventPrimaryKey prim) {
        this.prim = prim;
    }

    public Worker getWorker() {
        return worker;
    }

    public void setWorker(Worker worker) {
        this.worker = worker;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public int getMissing() {
        return missing;
    }

    public void setMissing(int missing) {
        this.missing = missing;
    }

}
