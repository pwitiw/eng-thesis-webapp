package org.webapp.repositories.daoImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.webapp.entities.Event;
import org.webapp.repositories.EventRepository;
import org.webapp.entities.PrimaryKeyEvent;

import java.util.List;

/**
 * Created by Patryk on 2016-01-05.
 */
@Component
public class EventRepositoryImpl {

    @Autowired
    EventRepository eventRepository;

//    public List<Event> getEventsForActiveWorkers(){
//        return eventRepository. DOKONCZYC
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
