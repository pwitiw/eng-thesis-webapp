package com.frontwit.app.controllers;

import com.frontwit.app.dto.WorkerDto;
import com.frontwit.app.dto.WorkerEventDto;
import com.frontwit.app.entities.Worker;
import com.frontwit.app.services.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import com.frontwit.app.services.WorkerService;

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
    public ResponseEntity<List<WorkerDto>> getActiveWorkers() {
        List<WorkerDto> workerDtos = workerService.getActiveWorkers();
        return new ResponseEntity<List<WorkerDto>>(workerDtos, HttpStatus.OK);
    }

    @RequestMapping(value = "/workers/{id}", method = RequestMethod.GET)
    public ResponseEntity<Worker> getWorkerForId(@PathVariable("id") long id) {
        Worker worker = workerService.getWorker(id);
        return new ResponseEntity<Worker>(worker, HttpStatus.OK);
    }

    @RequestMapping(value = "/workers/add-worker", method = RequestMethod.POST)
    @ResponseStatus(HttpStatus.OK)
    public void addWorker(@RequestBody Worker newWorker) {

     /*   workerValidator.validate(newWorker, result);

        if (result.hasErrors())
            return "/workers/new";

        status.setComplete();*/
        workerService.add(newWorker);
    }

    @RequestMapping(value = "workers/{id}/delete-worker", method = RequestMethod.POST)
    @ResponseStatus(HttpStatus.OK)
    public void deleteWorkerForId(@PathVariable("id") long id) {
        workerService.deleteWorker(id);
    }


    @RequestMapping(value = "workers/update-worker", method = RequestMethod.POST)
    @ResponseStatus(HttpStatus.OK)
    public void editWorker(@RequestBody Worker worker) {

        workerService.confirmChangesIfExists(worker);
    }

    @RequestMapping(value = "workers/{id}/events", method = RequestMethod.GET)
    public ResponseEntity<WorkerEventDto> getEventsForWorkerId(@PathVariable("id") long id) {

        WorkerEventDto workerEventDto = eventService.getWorkerEventDtoForWorkerCode(id);

        return new ResponseEntity<WorkerEventDto>(workerEventDto, HttpStatus.OK);
    }
}