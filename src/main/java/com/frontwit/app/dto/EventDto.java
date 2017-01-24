package com.frontwit.app.dto;

import com.frontwit.app.entities.Event;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 * Created by Patryk on 2016-01-06.
 */
public class EventDto implements Serializable {

    private long orderId;
    private long positionId;
    private String orderName;
    private String position;
    private String worker;
    private Date date;
    private int missing;

    public long getOrderId() {
        return orderId;
    }

    public void setOrderId(long orderId) {
        this.orderId = orderId;
    }

    public long getPositionId() {
        return positionId;
    }

    public void setPositionId(long positionId) {
        this.positionId = positionId;
    }

    public String getOrderName() {
        return orderName;
    }

    public void setOrderName(String orderName) {
        this.orderName = orderName;
    }

    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        this.position = position;
    }

    public String getWorker() {
        return worker;
    }

    public void setWorker(String worker) {
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

    public static EventDto parseEventDto(Event event) {
        EventDto dto = new EventDto();

        dto.setOrderId(event.getPrim().getOrder().getId());
        dto.setPositionId(event.getPrim().getPosition().getId());
        dto.setOrderName(event.getPrim().getOrder().getName());
        dto.setPosition(event.getPrim().getPosition().getName());
        dto.setWorker(event.getWorker().toString());
        dto.setMissing(event.getMissing());
        dto.setDate(event.getDate());
        return dto;
    }

    public static List<EventDto> parseEventDtos(List<Event> events) {

        List<EventDto> dtos = new ArrayList<>();
        for (Event event : events)
            dtos.add(EventDto.parseEventDto(event));
        return dtos;
    }
}
