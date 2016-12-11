package org.webapp.repositories.daoImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;
import org.webapp.entities.Worker;
import org.webapp.repositories.WorkerRepository;

import java.util.List;

/**
 * Created by Patryk on 2016-01-05.
 */
@Component
public class WorkerRepositoryImpl {

    @Autowired
    WorkerRepository workerRepository;

@Transactional
    public Worker getWorkerForId(long id) {
        return workerRepository.findById(id);
    }
//    @Transactional
//    public Worker getWorkerForId(long id) {
//        Worker workerEntity = workerRepository.findById(id);
//        workerEntity.getEvents().size();
//
//
//        return workerEntity;
//    }

    public void deleteWorkerForCode(long id) {

        Worker worker = workerRepository.findById(id);
        workerRepository.delete(worker);
    }

    public List<Worker> getActiveWorkers() {
        return workerRepository.findByActive((short) 1);
    }

    public List<Worker> getAllWorkers() {
        return workerRepository.findAll();
    }

    public void setInactiveWorkerForCode(long id) {

        Worker worker = workerRepository.findById(id);
        worker.setActive((short) 0);
        workerRepository.save(worker);
    }

    public void saveWorker(Worker worker) {
        workerRepository.save(worker);
    }
//
//    public List<Event> getEntitiesForWorker(long id){
//        return workerRepository.findEntityListforWorkerId(id);
//    }
}
