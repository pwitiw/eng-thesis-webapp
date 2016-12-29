package com.frontwit.app.dto;

import com.frontwit.app.entities.Event;

import java.io.Serializable;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by Patryk on 18.12.2016.
 */

public class EventLimited implements Serializable {

    private String orderName;
    private Timestamp date;
    private int missing;

    public EventLimited(Event event) {
        this.orderName = event.getPrim().getOrder().getName();
        this.date = event.getDate();
        this.missing = event.getMissing();
    }

    public static List<EventLimited> convertEvents(List<Event> events) {
        List<EventLimited> eventsLimited = new ArrayList<>();
        for (Event e : events) {
            eventsLimited.add(new EventLimited(e));
        }
        return eventsLimited;
    }

    public String getOrderName() {
        return orderName;
    }

    public Timestamp getDate() {
        return date;
    }

    public int getMissing() {
        return missing;
    }
}
