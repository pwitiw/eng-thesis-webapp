package org.webapp.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.webapp.models.EventEntity;
import org.webapp.services.EventService;

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
    public ResponseEntity<List<EventEntity>> printWorkerList() {

        List<EventEntity> events = eventService.getAllEvents();

        return new ResponseEntity<List<EventEntity>>(events, HttpStatus.OK);
    }


}
