package org.webapp.services;

import javafx.concurrent.Worker;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.webapp.models.WorkerEntity;
import org.webapp.repository.WorkerRepository;

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

    public List<WorkerEntity> getAllWorkers() {
        List<WorkerEntity> workers = workerRepository.findAll();

        return workers;
    }

    @Transactional
    public void add(WorkerEntity worker) {

        if ((!(worker.getName().trim().equals("") || worker.getSurname().trim().equals(""))))
            workerRepository.save(worker);
    }

    @Transactional
    public void delete(WorkerEntity workerEntity) {
        workerRepository.delete(workerEntity);
    }

    @Transactional
    public void delete(short code) {

        WorkerEntity worker = workerRepository.findByCode(code);
        delete(worker);
    }

    @Transactional
    public WorkerEntity getWorker(short code) {
        return workerRepository.findByCode(code);
    }

    @Transactional
    public boolean addChangesIfExists(WorkerEntity newWorker) {

        WorkerEntity oldWorker = workerRepository.findByCode(newWorker.getCode());
        if (oldWorker.equals(newWorker)) {
            return false;
        } else if (!(newWorker.getName().trim().equals("") || newWorker.getSurname().trim().equals(""))) {
            workerRepository.updateWorker(newWorker.getId(), newWorker.getName(), newWorker.getSurname(),
                    newWorker.getPosition(), newWorker.getCode());
            return true;
        }

        return false;
    }

}
