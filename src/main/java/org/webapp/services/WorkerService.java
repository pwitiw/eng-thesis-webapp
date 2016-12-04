package org.webapp.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.webapp.dao.daoImpl.EventRepositoryDAO;
import org.webapp.dao.daoImpl.WorkerRepositoryDAO;
import org.webapp.models.WorkerEntity;
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

//    @Transactional(readOnly=true)
//    public List<WorkerEventDto> getActiveWorkers() {
//        List<WorkerEntity> workers = workerRepositoryDAO.getActiveWorkers();
//
//        List<WorkerEventDto> workersDto = new ArrayList<WorkerEventDto>();
//        for (WorkerEntity worker : workers) {
//            workersDto.add(new WorkerEventDto(workers,));
//        }
//        return workersDto;
//    }

    @Transactional
    public List<WorkerEntity> getActiveWorkers() {
        List<WorkerEntity> workers = workerRepositoryDAO.getActiveWorkers();
        return workers;
    }

    @Transactional
    public void add(WorkerEntity worker) {
        worker.setActive((short) 1);
        if (!(worker.getName().trim().equals("") || worker.getSurname().trim().equals("") || worker.getId() == 0))
            workerRepositoryDAO.saveWorker(worker);
    }

    @Transactional
    public void deleteWorker(WorkerEntity workerEntity) {

        if (eventRepositoryDAO.getEventsForWorkerId(workerEntity.getCode()).size() > 0) {
            workerRepositoryDAO.setInactiveWorkerForCode(workerEntity.getCode());
        } else {
            workerRepositoryDAO.deleteWorkerForCode(workerEntity.getCode());
        }
    }

    @Transactional
    public WorkerEntity getWorker(long id) {
        return workerRepositoryDAO.getWorkerForId(id);
    }

    @Transactional
    public boolean confirmChangesIfExists(WorkerEntity newWorker) {

        WorkerEntity oldWorker = workerRepositoryDAO.getWorkerForId(newWorker.getCode());
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
        copy.setPositionId(worker.getPositionId());
    }


}
