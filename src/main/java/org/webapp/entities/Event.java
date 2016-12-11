package org.webapp.entities;
import org.webapp.utils.Config;

import javax.persistence.*;
import java.io.Serializable;
import java.sql.Timestamp;

/**
 * Created by Patryk on 2015-11-19.
 */
@Entity
@Table(name = "events", schema = Config.frontWitDbSchema)
public class Event implements Serializable{

    public PrimaryKeyEvent getPrim() {
        return prim;
    }

    public void setPrim(PrimaryKeyEvent prim) {
        this.prim = prim;
    }
    @EmbeddedId
    PrimaryKeyEvent prim;

    @Column(name = "WORKER_ID")
    private long workerId;

    private Timestamp date;

    private int missing;

    private Worker worker;

    public long getWorkerId() {
        return workerId;
    }

    public void setWorkerId(long workerCode) {
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
//
//    @Access(AccessType.PROPERTY)
//    @ManyToOne(fetch = FetchType.EAGER)
//    @JoinColumn(name = "worker_id")
//    public Worker getWorker() {
//        return worker;
//    }
//
//    public void setWorker(Worker worker) {
//        this.worker = worker;
//    }
}
