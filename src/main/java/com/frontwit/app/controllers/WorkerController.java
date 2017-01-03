package com.frontwit.app.controllers;

import com.frontwit.app.dto.WorkerDto;
import com.frontwit.app.dto.WorkerEventDto;
import com.frontwit.app.entities.Worker;
import com.frontwit.app.exceptions.ResourcesBadFormatException;
import com.frontwit.app.exceptions.ResourcesDuplicationException;
import com.frontwit.app.exceptions.ResourcesNotFoundException;
import com.frontwit.app.validators.WorkerValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
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
    WorkerValidator workerValidator;

    @RequestMapping(value = "/workers", method = RequestMethod.GET)
    public ResponseEntity<?> getActiveWorkers() {
        List<WorkerDto> workerDtos = workerService.getActiveWorkers();
        return new ResponseEntity<List<WorkerDto>>(workerDtos, HttpStatus.OK);
    }

    @RequestMapping(value = "/workers/{id}", method = RequestMethod.GET)
    public ResponseEntity<?> getWorkerForId(@PathVariable("id") long id) throws ResourcesNotFoundException {
        WorkerDto workerDto = workerService.getWorkerForId(id);
        return new ResponseEntity<WorkerDto>(workerDto, HttpStatus.OK);
    }

    @RequestMapping(value = "/workers/add-worker", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public ResponseEntity<?> addWorker(@RequestBody WorkerDto workerDto, BindingResult result) throws ResourcesBadFormatException, ResourcesDuplicationException {

        workerValidator.validate(workerDto, result);
        if (result.hasErrors())
            throw new ResourcesBadFormatException();
        workerService.addWorker(workerDto);
        return new ResponseEntity<WorkerDto>(workerDto, HttpStatus.OK);
    }

    @RequestMapping(value = "workers/delete-worker", method = RequestMethod.POST)
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<?> deleteWorkerForId(@RequestBody WorkerDto workerDto) throws ResourcesNotFoundException {
        workerService.deleteWorker(workerDto);
        return new ResponseEntity<WorkerDto>(workerDto, HttpStatus.OK);
    }

    @RequestMapping(value = "workers/update-worker", method = RequestMethod.POST)
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<?> editWorker(@RequestBody WorkerDto workerDto, BindingResult result) throws ResourcesNotFoundException, ResourcesBadFormatException {
        workerValidator.validate(workerDto, result);
        if (result.hasErrors())
            throw new ResourcesBadFormatException();
        workerService.updateWorker(workerDto);
        return new ResponseEntity<WorkerDto>(workerDto, HttpStatus.OK);
    }

    @RequestMapping(value = "workers/{id}/events", method = RequestMethod.GET)
    public ResponseEntity<?> getEventsForWorkerId(@PathVariable("id") long id) {
        WorkerEventDto workerEventDto = workerService.getEventsForWorker(id);
        return new ResponseEntity<WorkerEventDto>(workerEventDto, HttpStatus.OK);
    }
}