package org.webapp.dao.daoImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.webapp.dao.EventRepository;
import org.webapp.models.EventEntity;
import org.webapp.models.WorkerEntity;

import java.util.List;

/**
 * Created by Patryk on 2016-01-05.
 */
@Repository
public class EventRepositoryDAO {

    @Autowired
    EventRepository eventRepository;

//    public List<EventEntity> getEventsForActiveWorkers(){
//        return eventRepository. DOKONCZYC
//    }

    public List<EventEntity> getAllEvents() {
        return eventRepository.findAll();
    }

    public List<EventEntity> getEventsForWorker(short code) {
        return eventRepository.findByWorker(code);
    }

}
