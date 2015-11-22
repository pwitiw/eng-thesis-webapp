package org.webapp.models;

import javafx.concurrent.Worker;

import javax.persistence.*;
import java.sql.Timestamp;

/**
 * Created by Patryk on 2015-11-19.
 */

@Entity(name = "events")
public class EventEntity{



    public PrimaryKeyEvents getPrim() {
        return prim;
    }

    public void setPrim(PrimaryKeyEvents prim) {
        this.prim = prim;
    }
    @EmbeddedId
    PrimaryKeyEvents prim;

    private short worker;

    private Timestamp date;

    private int missing;



    public short getWorker() {
        return worker;
    }

    public void setWorker(short worker) {
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
