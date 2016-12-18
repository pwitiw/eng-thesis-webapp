package com.frontwit.app.dto;

import com.frontwit.app.entities.Event;
import java.io.Serializable;
import java.sql.Timestamp;

/**
 * Created by Patryk on 2016-01-06.
 */
public class EventDto implements Serializable {

    private long orderId;
    private long positionId;
    private String orderName;
    private String position;
    private String worker;
    private Timestamp date;
    private int missing;

    public EventDto(Event event){
        this.orderId = event.getPrim().getOrder().getId();
        this.positionId = event.getPrim().getPosition().getId();
        this.orderName = event.getPrim().getOrder().getName();
        this.position = event.getPrim().getPosition().getName();
        this.worker = event.getWorker().toString();
        this.date = event.getDate();
        this.missing = event.getMissing();
    }

    public long getOrderId() {
        return orderId;
    }

    public long getPositionId() {
        return positionId;
    }

    public String getOrderName() {
        return orderName;
    }

    public String getPosition() {
        return position;
    }

    public String getWorker() {
        return worker;
    }

    public Timestamp getDate() {
        return date;
    }

    public int getMissing() {
        return missing;
    }
}
