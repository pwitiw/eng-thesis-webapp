package org.webapp.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.webapp.dao.EventRepository;
import org.webapp.models.WorkerEntity;
import org.webapp.dao.WorkerRepository;

import javax.persistence.OneToMany;
import java.util.List;

/**
 * Created by Patryk on 2015-11-02.
 */
@Service
public class WorkerService {

    @Autowired
    @OneToMany
    WorkerRepository workerRepository;

    @Autowired
    EventRepository eventRepository;

    @Transactional
    public List<WorkerEntity> getAllWorkers() {
        return workerRepository.findAll();
    }

    @Transactional
    public List<WorkerEntity> getActiveWorkers() {
        return workerRepository.findByActive((short) 1);
    }


    @Transactional
    public void add(WorkerEntity worker) {

        if ((!(worker.getName().trim().equals("") || worker.getSurname().trim().equals(""))))
            workerRepository.save(worker);
    }

    @Transactional
    public void deleteWorker(WorkerEntity workerEntity) {

        if (eventRepository.findByWorker(workerEntity.getCode()).size() > 0)
            workerRepository.inactivateWorker(workerEntity.getCode());
        else
            workerRepository.deleteWorkerForCode(workerEntity.getCode());
    }

    @Transactional
    public WorkerEntity getWorker(short code) {
        return workerRepository.findByCode(code);
    }

    @Transactional
    public boolean confirmChangesIfExists(WorkerEntity newWorker) {

        WorkerEntity oldWorker = workerRepository.findByCode(newWorker.getCode());
        if (oldWorker.equals(newWorker)) {
            return false;
        } else if (!(newWorker.getName().trim().equals("") || newWorker.getSurname().trim().equals(""))) {
            copyFromOneToAnother(newWorker, oldWorker);
            workerRepository.save(oldWorker);
            return true;
        }

        return false;
    }

    private void copyFromOneToAnother(WorkerEntity worker, WorkerEntity copy) {

        copy.setId(worker.getId());
        copy.setName(worker.getName());
        copy.setSurname(worker.getSurname());
        copy.setPosition(worker.getPosition());
    }


}
