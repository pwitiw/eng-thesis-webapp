package com.frontwit.app.controllers;

        import com.frontwit.app.dto.PositionDto;
        import com.frontwit.app.dto.WorkerDto;
        import com.frontwit.app.dto.WorkerEventDto;
        import com.frontwit.app.entities.Worker;
        import com.frontwit.app.exceptions.ResourcesBadFormatException;
        import com.frontwit.app.exceptions.ResourcesDuplicationException;
        import com.frontwit.app.exceptions.ResourcesNotFoundException;
        import com.frontwit.app.utils.FrontWitRestController;
        import com.frontwit.app.validators.WorkerValidator;
        import org.springframework.beans.factory.annotation.Autowired;
        import org.springframework.http.HttpStatus;
        import org.springframework.http.MediaType;
        import org.springframework.http.ResponseEntity;
        import org.springframework.validation.BindingResult;
        import org.springframework.web.bind.annotation.*;
        import com.frontwit.app.services.WorkerService;

        import java.util.List;

/**
 * Created by Patryk on 2015-11-02.
 */
@FrontWitRestController
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
    public ResponseEntity<?> getWorkerForId(@PathVariable("id") long id)
            throws ResourcesNotFoundException {

        WorkerDto workerDto = workerService.getWorkerDtoForId(id);
        return new ResponseEntity<WorkerDto>(workerDto, HttpStatus.OK);
    }

    @RequestMapping(value = "/workers/code/{code}", method = RequestMethod.GET)
    public ResponseEntity<?> getWorkerForCode(@PathVariable("code") short code)
            throws ResourcesNotFoundException {

        WorkerDto workerDto = workerService.getWorkerForCode(code);
        return new ResponseEntity<WorkerDto>(workerDto, HttpStatus.OK);
    }

    @RequestMapping(value = "/workers", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public ResponseEntity<?> addWorker(@RequestBody WorkerDto workerDto, BindingResult result)
            throws ResourcesBadFormatException, ResourcesDuplicationException {

        workerValidator.validate(workerDto, result);
        if (result.hasErrors())
            throw new ResourcesBadFormatException();
        WorkerDto newWorker =  workerService.addWorker(workerDto);
        return new ResponseEntity<WorkerDto>(newWorker, HttpStatus.OK);
    }

    @RequestMapping(value = "workers/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<?> deleteWorkerForId(@PathVariable("id") long id)
            throws ResourcesNotFoundException {

        workerService.deleteWorker(id);
        return new ResponseEntity(HttpStatus.OK);
    }

    @RequestMapping(value = "workers/{id}", method = RequestMethod.PUT)
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<?> editWorker(@PathVariable("id") long id, @RequestBody WorkerDto workerDto, BindingResult result)
            throws ResourcesNotFoundException, ResourcesBadFormatException {

        workerValidator.validate(workerDto, result);
        if (result.hasErrors())
            throw new ResourcesBadFormatException();
        WorkerDto updatedWorker = workerService.updateWorker(workerDto);
        return new ResponseEntity<WorkerDto>(updatedWorker, HttpStatus.OK);
    }

    @RequestMapping(value = "workers/{id}/events", method = RequestMethod.GET)
    public ResponseEntity<?> getEventsForWorkerId(@PathVariable("id") long id)
            throws ResourcesNotFoundException {

        WorkerEventDto workerEventDto = workerService.getEventsForWorker(id);
        return new ResponseEntity<WorkerEventDto>(workerEventDto, HttpStatus.OK);
    }

    @RequestMapping(value = "workers/positions", method = RequestMethod.GET)
    public ResponseEntity<?> getWorkerPositions() {

        List<PositionDto> positionDtos = workerService.getWorkerPositions();
        return new ResponseEntity<List<PositionDto>>(positionDtos, HttpStatus.OK);
    }

}