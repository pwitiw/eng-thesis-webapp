package org.webapp.dao.daoImpl;

import javafx.concurrent.Worker;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import org.webapp.dao.OrderRepository;
import org.webapp.dao.WorkerRepository;
import org.webapp.models.WorkerEntity;

import java.util.List;

/**
 * Created by Patryk on 2016-01-05.
 */
@Repository
public class WorkerRepositoryDAO {

    @Autowired
    WorkerRepository workerRepository;

    public WorkerEntity getWorkerForId(long id){
        return workerRepository.findById(id);
    }

    public void deleteWorkerForCode(long id) {

        WorkerEntity workerEntity = workerRepository.findById(id);
        workerRepository.delete(workerEntity);
    }

    public List<WorkerEntity> getActiveWorkers() {
        return workerRepository.findByActive((short) 1);
    }

    public List<WorkerEntity> getAllWorkers() {
        return workerRepository.findAll();
    }

    public void setInactiveWorkerForCode(long id) {

        WorkerEntity workerEntity = workerRepository.findById(id);
        workerEntity.setActive((short) 0);
        workerRepository.save(workerEntity);
    }

    public void saveWorker(WorkerEntity worker){
        workerRepository.save(worker);
    }

}
