package com.frontwit.app.services;

import com.frontwit.app.dto.EventDto;
import com.frontwit.app.entities.Event;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.frontwit.app.repositories.daoImpl.EventRepositoryImpl;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by Patryk on 2015-11-19.
 */
@Service
public class EventService {

    @Autowired
    EventRepositoryImpl eventRepositoryImpl;

    @Transactional
    public List<EventDto> getAllEvents() {
        return EventDto.parseEventDtos(eventRepositoryImpl.getAllEvents());
    }

    @Transactional
    public void deleteEvent(long orderId,long positionId) {
        eventRepositoryImpl.deleteEvent(orderId,positionId);
    }

    @Transactional
    public List<Event> getEventsForOrderId(Long id) {
        return eventRepositoryImpl.getEventsForOrder(id);
    }

    @Transactional
    public long getEventCountForWorekr(long id){
        return eventRepositoryImpl.getCountForWorkerId(id);
    }

}

