package org.webapp.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.webapp.entities.Worker;
import org.webapp.services.EventService;
import org.webapp.services.WorkerService;

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
    public ResponseEntity<List<Worker>> printWorkerList() {

        List<Worker> workers = workerService.getActiveWorkers();

        return new ResponseEntity<List<Worker>>(workers, HttpStatus.OK);
    }

    @RequestMapping(value = "/workers/{id}", method = RequestMethod.GET)
    public ResponseEntity<Worker> printWorkerList(@PathVariable("id") long id) {

        Worker worker = workerService.getWorker(id);

        return new ResponseEntity<Worker>(worker, HttpStatus.OK);
    }

    @RequestMapping(value = "/workers/add-new-worker", method = RequestMethod.POST)
    @ResponseStatus(HttpStatus.OK)
    public void addWorker(@RequestBody Worker newWorker) {

     /*   workerValidator.validate(newWorker, result);

        if (result.hasErrors())
            return "/workers/new";

        status.setComplete();*/
        workerService.add(newWorker);
    }

    @RequestMapping(value = "workers/delete", method = RequestMethod.POST)
    @ResponseStatus(HttpStatus.OK)
    public void deleteWorker(@RequestBody Worker worker) {

        workerService.deleteWorker(worker);
    }


    @RequestMapping(value = "workers/modify", method = RequestMethod.POST)
    @ResponseStatus(HttpStatus.OK)
    public void editWorker(@RequestBody Worker worker) {

        workerService.confirmChangesIfExists(worker);
    }

}