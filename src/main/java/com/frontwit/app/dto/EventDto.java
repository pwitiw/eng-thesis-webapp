package com.frontwit.app.dto;

import com.frontwit.app.entities.Event;
import com.frontwit.app.entities.Order;
import com.frontwit.app.entities.Worker;

import java.io.Serializable;
import java.sql.Timestamp;

/**
 * Created by Patryk on 2016-01-06.
 */
public class EventDto implements Serializable {

    private long orderId;

    private String orderName;

    int position;

    private String worker;

    private Timestamp date;

    private int missing;

    public EventDto(Event event, Order order, Worker worker) {
        this.orderName = order.getName();
        this.orderId = order.getId();
        this.position = event.getPrim().getPositionId();
        this.worker = worker.getName() + worker.getSurname();
        this.date = event.getDate();
        this.missing = event.getMissing();
    }

    public long getOrderId() {
        return orderId;
    }

    public void setOrderId(long orderId) {
        this.orderId = orderId;
    }

    public String getOrderName() {
        return orderName;
    }

    public void setOrderName(String orderName) {
        this.orderName = orderName;
    }

    public int getPosition() {
        return position;
    }

    public void setPosition(int position) {
        this.position = position;
    }

    public String getWorker() {
        return worker;
    }

    public void setWorker(String worker) {
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
