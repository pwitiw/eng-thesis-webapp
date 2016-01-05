package org.webapp.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.webapp.dao.daoImpl.EventRepositoryDAO;
import org.webapp.dao.daoImpl.WorkerRepositoryDAO;
import org.webapp.models.WorkerEntity;
import org.webapp.dao.WorkerRepository;

import javax.persistence.OneToMany;
import java.util.List;

/**
 * Created by Patryk on 2015-11-02.
 */
@Service
public class WorkerService {

//    @Autowired
//    @OneToMany
//    WorkerRepository workerRepository;

    @Autowired
    WorkerRepositoryDAO workerRepositoryDAO;

    @Autowired
    EventRepositoryDAO eventRepositoryDAO;

    @Transactional
    public List<WorkerEntity> getAllWorkers() {
        return workerRepositoryDAO.getAllWorkers();
    }

    @Transactional
    public List<WorkerEntity> getActiveWorkers() {
        return workerRepositoryDAO.getActiveWorkers();
    }


    @Transactional
    public void add(WorkerEntity worker) {

        if (!(worker.getName().trim().equals("") || worker.getSurname().trim().equals("") || worker.getId() == 0 ))
            workerRepositoryDAO.saveWorker(worker);
    }

    @Transactional
    public void deleteWorker(WorkerEntity workerEntity) {

        if (eventRepositoryDAO.getEventsForWorker(workerEntity).size() > 0) {
            workerRepositoryDAO.setInactiveForCode(workerEntity.getCode());
        } else {
            workerRepositoryDAO.deleteWorkerForCode(workerEntity.getCode());
        }
    }

    @Transactional
    public WorkerEntity getWorker(short code) {
        return workerRepositoryDAO.getWorkerForCode(code);
    }

    @Transactional
    public boolean confirmChangesIfExists(WorkerEntity newWorker) {

        WorkerEntity oldWorker = workerRepositoryDAO.getWorkerForCode(newWorker.getCode());
        if (oldWorker.equals(newWorker)) {
            return false;
        } else if (!(newWorker.getName().trim().equals("") || newWorker.getSurname().trim().equals(""))) {
            copyFromOneToAnother(newWorker, oldWorker);
            workerRepositoryDAO.saveWorker(oldWorker);
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
