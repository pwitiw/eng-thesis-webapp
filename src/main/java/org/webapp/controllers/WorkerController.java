package org.webapp.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.support.SessionStatus;
import org.webapp.dto.WorkerEventDto;
import org.webapp.models.EventEntity;
import org.webapp.models.WorkerEntity;
import org.webapp.services.EventService;
import org.webapp.services.WorkerService;
import org.webapp.validators.WorkerValidator;

import java.util.List;

/**
 * Created by Patryk on 2015-11-02.
 */
@Controller
public class WorkerController {

    @Autowired
    WorkerService workerService;

    @Autowired
    EventService eventService;


    @RequestMapping(value = "/workers", method = RequestMethod.GET)
    public ResponseEntity<List<WorkerEntity>> printWorkerList() {

        List<WorkerEntity> workers = workerService.getActiveWorkers();

        return new ResponseEntity<List<WorkerEntity>>(workers, HttpStatus.OK);
    }

    @RequestMapping(value = "/workers/add-new-worker", method = RequestMethod.POST)
    @ResponseStatus(HttpStatus.OK)
    public void addWorker(@RequestBody WorkerEntity newWorker) {

     /*   workerValidator.validate(newWorker, result);

        if (result.hasErrors())
            return "/workers/new";

        status.setComplete();*/
        workerService.add(newWorker);
    }

    @RequestMapping(value = "workers/delete", method = RequestMethod.POST)
    @ResponseStatus(HttpStatus.OK)
    public void deleteWorker(@RequestBody WorkerEntity worker) {

        workerService.deleteWorker(worker);
    }


    @RequestMapping(value = "workers/modify", method = RequestMethod.POST)
    @ResponseStatus(HttpStatus.OK)
    public void editWorker(@RequestBody WorkerEntity worker) {

        workerService.confirmChangesIfExists(worker);
    }

}