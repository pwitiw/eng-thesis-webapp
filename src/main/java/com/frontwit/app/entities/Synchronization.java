package com.frontwit.app.entities;

import com.frontwit.app.utils.Config;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Date;

/**
 * Created by Patryk on 09.04.2016.
 */
@Entity
@Table(name = "synchronization", schema = Config.FRONTWIT_DB_SCHEMA)
public class Synchronization {

    @Id
    private int id;

    @Column(name = "sync_date")
    private Date syncDate;

    private int amount;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Date getSyncDate() {
        return syncDate;
    }

    public void setSyncDate(Date syncDate) {
        this.syncDate = syncDate;
    }

    public int getAmount() {
        return amount;
    }

    public void setAmount(int amount) {
        this.amount = amount;
    }
}
