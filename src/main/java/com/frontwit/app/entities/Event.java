package com.frontwit.app.entities;
import com.frontwit.app.utils.Config;

import javax.persistence.*;
import java.io.Serializable;
import java.sql.Timestamp;

/**
 * Created by Patryk on 2015-11-19.
 */
@Entity
@Table(name = "events", schema = Config.frontWitDbSchema)
public class Event implements Serializable{

    @EmbeddedId
    EventPrimaryKey prim;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "WORKER_ID")
    private Worker worker;

    private Timestamp date;

    private int missing;

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
