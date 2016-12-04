package org.webapp.dto;

import org.webapp.models.EventEntity;
import org.webapp.models.OrderEntity;

import java.io.Serializable;
import java.sql.Timestamp;

/**
 * Created by Patryk on 2016-01-06.
 */
public class EventDto implements Serializable {

    private long order_id;

    private String id;

    int stage;

    private long worker;

    private Timestamp date;

    private int missing;
//todo tutaj poogarniac all zamiast tego intValue zrobic Longa czy cos w tym stylu
    public EventDto(EventEntity event, OrderEntity order) {

        this.order_id = event.getPrim().getOrderId();
        this.stage = event.getPrim().getPositionId().intValue();
        this.worker = event.getWorkerId();
        this.date = event.getDate();
        this.missing = event.getMissing();
        //this.order_id = order.getId();
    }

    public long getOrder_id() {
        return order_id;
    }

    public void setOrder_id(long order_id) {
        this.order_id = order_id;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public int getStage() {
        return stage;
    }

    public void setStage(int stage) {
        this.stage = stage;
    }

    public long getWorker() {
        return worker;
    }

    public void setWorker(long worker) {
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
