package com.frontwit.app.services;

import com.frontwit.app.dto.WorkerDto;
import com.frontwit.app.dto.WorkerEventDto;
import com.frontwit.app.entities.Event;
import com.frontwit.app.entities.Worker;
import com.frontwit.app.repositories.daoImpl.WorkerRepositoryImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by Patryk on 2015-11-02.
 */
@Service
public class WorkerService {

    @Autowired
    WorkerRepositoryImpl workerRepositoryDAO;

    @Autowired
    EventService eventService;

    @Transactional
    public List<WorkerDto> getActiveWorkers() {
        List<Worker> workers = workerRepositoryDAO.getActiveWorkers();
        return getDtosForWorkers(workers);
    }

    @Transactional
    public WorkerEventDto getEventsForWorker(long id) {
        List<Event> events= eventService.getEventDtosForWorkerId(id);
        Worker worker = workerRepositoryDAO.getWorkerForId(id);
        return new WorkerEventDto(worker, events);
    }

    @Transactional
    public void add(Worker worker) {
        worker.setActive((short) 1);
        if (!(worker.getName().trim().equals("") || worker.getSurname().trim().equals("") || worker.getId() == 0))
            workerRepositoryDAO.saveWorker(worker);
    }

    @Transactional
    public void deleteWorker(long id) {
        workerRepositoryDAO.setInactiveWorkerForCode(id);
    }

    @Transactional
    public Worker getWorker(long id) {

        return workerRepositoryDAO.getWorkerForId(id);
    }

    @Transactional
    public boolean confirmChangesIfExists(Worker newWorker) {

        Worker oldWorker = workerRepositoryDAO.getWorkerForId(newWorker.getCode());
        if (oldWorker.equals(newWorker)) {
            return false;
        } else if (!(newWorker.getName().trim().equals("") || newWorker.getSurname().trim().equals(""))) {
            copyFromOneToAnother(newWorker, oldWorker);
            workerRepositoryDAO.saveWorker(oldWorker);
            return true;
        }

        return false;
    }

    private void copyFromOneToAnother(Worker worker, Worker copy) {

        copy.setId(worker.getId());
        copy.setName(worker.getName());
        copy.setSurname(worker.getSurname());
        copy.setPosition(worker.getPosition());
    }

    private List<WorkerDto> getDtosForWorkers(List<Worker> workers) {
        List<WorkerDto> workerDtos = new ArrayList<>();
        for (Worker w : workers) {
            workerDtos.add(new WorkerDto(w));
        }
        return workerDtos;
    }

}
