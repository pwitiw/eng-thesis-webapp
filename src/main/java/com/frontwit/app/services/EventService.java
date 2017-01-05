package com.frontwit.app.services;

import com.frontwit.app.dto.EventDto;
import com.frontwit.app.entities.Event;
import com.frontwit.app.entities.Worker;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.frontwit.app.entities.Order;
import com.frontwit.app.repositories.daoImpl.EventRepositoryImpl;
import com.frontwit.app.dto.WorkerEventDto;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by Patryk on 2015-11-19.
 */
@Service
public class EventService {

    @Autowired
    EventRepositoryImpl eventRepositoryDAO;

    @Transactional
    public List<EventDto> getAllEvents() {
        return getDtosForEvents(eventRepositoryDAO.getAllEvents());

    }

    public List<Event> getEventDtosForWorkerId(long id) {
        List<Event> events = eventRepositoryDAO.getEventsForWorkerId(id);
        return events;
    }

    @Transactional
    public void deleteEvent(Event event) {
        //todo eventRepositoryDAO.deleteEventForPrimaryKey(event.getPrim());
    }

    @Transactional
    public List<Event> getEventsForOrderId(Long id) {
        return eventRepositoryDAO.getEventsForOrder(id);
    }

    @Transactional
    public long getEventCountForWorekr(long id){
        return eventRepositoryDAO.getCountForWorkerId(id);
    }

    private List<EventDto> getDtosForEvents(List<Event> events) {
        List<EventDto> eventDtos = new ArrayList<>();
        for (Event e : events) {
            eventDtos.add(new EventDto(e));
        }
        return eventDtos;
    }

}

