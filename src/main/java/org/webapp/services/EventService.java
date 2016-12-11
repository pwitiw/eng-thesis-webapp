package org.webapp.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.webapp.entities.Event;
import org.webapp.entities.Order;
import org.webapp.repositories.daoImpl.EventRepositoryImpl;
import org.webapp.dto.WorkerEventDto;
import org.webapp.entities.Worker;

import java.util.List;

/**
 * Created by Patryk on 2015-11-19.
 */
@Service
public class EventService {

    @Autowired
    EventRepositoryImpl eventRepositoryDAO;

    @Autowired
    WorkerService workerService;

    @Transactional
    public List<Event> getAllEvents() {
        return eventRepositoryDAO.getAllEvents();
    }

    public WorkerEventDto getWorkerEventDtoForWorkerCode(long id) {
        List<Event> events = getEventsForWorkerCode(id);
        Worker worker = workerService.getWorker(id);

        return new WorkerEventDto(worker, events);
    }

    @Transactional
    private List<Event> getEventsForWorkerCode(long id) {
        return eventRepositoryDAO.getEventsForWorkerId(id);
    }

    @Transactional
    public void deleteEvent(Event event) {
        eventRepositoryDAO.deleteEventForPrimaryKey(event.getPrim());
    }

    @Transactional
    public List<Event> getEventsForOrder(Order order) {
        return eventRepositoryDAO.getEventsForOrder(order.getId());
    }
}
