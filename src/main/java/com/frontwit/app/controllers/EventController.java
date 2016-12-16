package com.frontwit.app.controllers;

import com.frontwit.app.dto.WorkerEventDto;
import com.frontwit.app.entities.Event;
import com.frontwit.app.services.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by Patryk on 2016-01-05.
 */
@Controller
public class EventController {

    @Autowired
    EventService eventService;

    @RequestMapping(value = "/events", method = RequestMethod.GET)
    public ResponseEntity<List<Event>> getListOfEvents() {

        List<Event> events = eventService.getAllEvents();

        return new ResponseEntity<List<Event>>(events, HttpStatus.OK);
    }

    @RequestMapping(value = "/events/{id}", method = RequestMethod.GET)
    public ResponseEntity<WorkerEventDto> getWorkerList(@PathVariable("id") long id) {

        WorkerEventDto workerEventDto = eventService.getWorkerEventDtoForWorkerCode(id);

        return new ResponseEntity<WorkerEventDto>(workerEventDto, HttpStatus.OK);
    }

    @RequestMapping(value = "/events/delete", method = RequestMethod.POST)
    @ResponseStatus(HttpStatus.OK)
    public void deleteWorker(@RequestBody Event event) {

        eventService.deleteEvent(event);
    }

}
