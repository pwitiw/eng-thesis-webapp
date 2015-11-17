package org.webapp.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.webapp.models.WorkerEntity;
import org.webapp.repository.WorkerRepository;

import java.util.List;

/**
 * Created by Patryk on 2015-11-02.
 */
@Service
public class WorkerService {

    @Autowired
    WorkerRepository workerRepository;

    @Transactional
    public List<WorkerEntity> getAllWorkers() {
        List<WorkerEntity> workers = workerRepository.findAll();

        return workers;
    }

}
