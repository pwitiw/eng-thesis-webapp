package org.webapp.dao.daoImpl;

import javafx.concurrent.Worker;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
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

    public WorkerEntity getWorkerForCode(short code){
        return workerRepository.findByCode(code);
    }

    public void deleteWorkerForCode(short code) {

        WorkerEntity workerEntity = workerRepository.findByCode(code);
        workerRepository.delete(workerEntity);
    }

    public List<WorkerEntity> getActiveWorkers() {
        return workerRepository.findByActive((short) 1);
    }

    public List<WorkerEntity> getAllWorkers() {
        return workerRepository.findAll();
    }

    public void setInactiveForCode(short code) {

        WorkerEntity workerEntity = workerRepository.findByCode(code);
        workerEntity.setActive((short) 0);
        workerRepository.save(workerEntity);
    }

    public void saveWorker(WorkerEntity worker){
        workerRepository.save(worker);
    }

}
