package com.frontwit.app.repositories.daoImpl;

import com.frontwit.app.entities.Event;
import com.frontwit.app.entities.PrimaryKeyEvent;
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

//    public List<Event> getEventsForActiveWorkers(){
//        return eventRepository. //todo DOKONCZYC
//    }

    public List<Event> getAllEvents() {
        return eventRepository.findAll();
    }

    public List<Event> getEventsForWorkerId(long id) {
        return eventRepository.findByWorkerId(id);
    }

    public void deleteEventForPrimaryKey(PrimaryKeyEvent prim){

        Event event = eventRepository.findByPrimOrderIdAndPrimPositionId(prim.getOrderId(),prim.getPositionId());
        eventRepository.delete(event);
    }

    public List<Event> getEventsForOrder(long id){
        return eventRepository.findByPrimOrderId(id);
    }

}
