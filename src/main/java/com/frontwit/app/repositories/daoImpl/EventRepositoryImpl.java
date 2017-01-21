package com.frontwit.app.repositories.daoImpl;

import com.frontwit.app.entities.Event;
import com.frontwit.app.entities.EventPrimaryKey;
import com.frontwit.app.repositories.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

/**
 * Created by Patryk on 2016-01-05.
 */
@Component
public class EventRepositoryImpl {

    @Autowired
    EventRepository eventRepository;

    public List<Event> getAllEvents() {
        return eventRepository.findAll();
    }

    public List<Event> getEventsForWorkerId(long id) {
        return eventRepository.findByWorkerId(id);
    }

    public void deleteEvent(long orderId, long positionId) {
        eventRepository.deleteByPrimOrderIdAndPrimPositionId(orderId, positionId);
    }

//        todo Event event = eventRepository.findByPrimOrderIdAndPrimPositionId(prim.getOrderId(),prim.getPositionId());

    public List<Event> getEventsForOrder(long id) {
        return eventRepository.findByPrimOrderId(id);
    }

    public Long getCountForWorkerId(long workerId) {
        return eventRepository.countByWorkerId(workerId);
    }

    public Event save(Event event) {
        return eventRepository.saveAndFlush(event);
    }
}
