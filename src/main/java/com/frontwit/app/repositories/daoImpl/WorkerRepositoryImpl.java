package com.frontwit.app.repositories.daoImpl;

import com.frontwit.app.entities.Worker;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;
import com.frontwit.app.repositories.WorkerRepository;

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

    public List<Worker> getActiveWorkers() {
        return workerRepository.findByActive((short) 1);
    }

    public void saveWorker(Worker worker) {
        workerRepository.save(worker);
    }

    public Worker getWorkerForCode(short code){
        return workerRepository.findByCode(code);
    }
}
