package org.webapp.models;


import org.webapp.utils.Config;

import javax.persistence.*;
import java.util.Date;

/**
 * Created by Patryk on 2015-10-28.
 */
@Entity
@Table(name = "orders", schema = Config.frontWitDbSchema)
public class OrderEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private String order_id;

    private String color;

    private String customer;

    private int amount;

    private short active;

    private int stage;

    private short missing;

    private short express;

    private Date date;

//    private Timestamp last_update;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getOrder_id() {
        return order_id;
    }

    public void setOrder_id(String order_id) {
        this.order_id = order_id;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public String getCustomer() {
        return customer;
    }

    public void setCustomer(String customer) {
        this.customer = customer;
    }

    public int getAmount() {
        return amount;
    }

    public void setAmount(int amount) {
        this.amount = amount;
    }

    public short getActive() {
        return active;
    }

    public void setActive(short active) {
        this.active = active;
    }

    public int getStage() {
        return stage;
    }

    public void setStage(int stage) {
        this.stage = stage;
    }

    public short getMissing() {
        return missing;
    }

    public void setMissing(short missing) {
        this.missing = missing;
    }

    public short getExpress() {
        return express;
    }

    public void setExpress(short express) {
        this.express = express;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }
}
