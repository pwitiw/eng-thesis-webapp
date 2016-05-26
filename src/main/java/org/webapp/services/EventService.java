package org.webapp.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.webapp.dao.daoImpl.EventRepositoryDAO;
import org.webapp.dto.WorkerEventDto;
import org.webapp.models.EventEntity;
import org.webapp.dao.EventRepository;
import org.webapp.models.OrderEntity;
import org.webapp.models.WorkerEntity;

import java.awt.*;
import java.util.List;

/**
 * Created by Patryk on 2015-11-19.
 */
@Service
public class EventService {

    @Autowired
    EventRepositoryDAO eventRepositoryDAO;

    @Autowired
    WorkerService workerService;

    @Transactional
    public List<EventEntity> getAllEvents() {
        return eventRepositoryDAO.getAllEvents();
    }

//    @Transactional
//    public List<EventEntity> getEventsForActiveWorkers() {
//        return eventRepositoryDAO.getEventsForActiveWorkers();
//    }

    public WorkerEventDto getWorkerEventDtoForWorkerCode(short code) {
        List<EventEntity> events = getEventsForWorkerCode(code);
        WorkerEntity worker = workerService.getWorker(code);

        return new WorkerEventDto(worker, events);
    }

    @Transactional
    private List<EventEntity> getEventsForWorkerCode(short code) {
        return eventRepositoryDAO.getEventsForWorkerCode(code);
    }

    @Transactional
    public void deleteEvent(EventEntity event) {
        eventRepositoryDAO.deleteEventForPrimaryKey(event.getPrim());
    }

    @Transactional
    public List<EventEntity> getEventsForOrder(OrderEntity order) {
        return eventRepositoryDAO.getEventsForOrder(order.getId());
    }
}
