package com.frontwit.app.services;

import com.frontwit.app.entities.Event;
import com.frontwit.app.entities.Worker;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.frontwit.app.entities.Order;
import com.frontwit.app.repositories.daoImpl.EventRepositoryImpl;
import com.frontwit.app.dto.WorkerEventDto;

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
