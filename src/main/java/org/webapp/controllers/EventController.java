package org.webapp.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.webapp.dto.WorkerEventDto;
import org.webapp.models.EventEntity;
import org.webapp.models.WorkerEntity;
import org.webapp.services.EventService;
import org.webapp.services.WorkerService;

import java.util.List;

/**
 * Created by Patryk on 2016-01-05.
 */
@Controller
@RequestMapping("/events")
public class EventController {

    @Autowired
    EventService eventService;

    @RequestMapping(value = "/all", method = RequestMethod.GET)
    public ResponseEntity<List<EventEntity>> getListOfEvents() {

        List<EventEntity> events = eventService.getAllEvents();

        return new ResponseEntity<List<EventEntity>>(events, HttpStatus.OK);
    }

    @RequestMapping(value = "/{code}", method = RequestMethod.GET)
    public ResponseEntity<WorkerEventDto> getWorkerList(@PathVariable("code") short code) {

        WorkerEventDto workerEventDto = eventService.getWorkerEventDtoForWorkerCode(code);

        return new ResponseEntity<WorkerEventDto>(workerEventDto, HttpStatus.OK);
    }

    @RequestMapping(value = "/delete", method = RequestMethod.POST)
    @ResponseStatus(HttpStatus.OK)
    public void deleteWorker(@RequestBody EventEntity event) {

        eventService.deleteEvent(event);
    }

}
