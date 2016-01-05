package org.webapp.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.webapp.dao.daoImpl.EventRepositoryDAO;
import org.webapp.models.EventEntity;
import org.webapp.dao.EventRepository;

import java.util.List;

/**
 * Created by Patryk on 2015-11-19.
 */
@Service
public class EventService {

    @Autowired
    EventRepositoryDAO eventRepositoryDAO;

    @Transactional
    public List<EventEntity> getAllEvents() {
        return eventRepositoryDAO.getAllEvents();
    }

    @Transactional
    public List<EventEntity> getEventsForActiveWorkers() {
        return eventRepositoryDAO.getEventsForActiveWorkers();
    }

    @Transactional
    public List<EventEntity> getEventsForWorker(int code) {

        return eventRepositoryDAO.getAllEvents();
    }


}
