package org.webapp.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.webapp.models.EventEntity;
import org.webapp.dao.EventRepository;

import java.util.List;

/**
 * Created by Patryk on 2015-11-19.
 */
@Service
public class EventService {

    @Autowired
    EventRepository eventRepository;

   public List<EventEntity> getEventsForWorker(int code) {

        return eventRepository.findAll();
    }
}
