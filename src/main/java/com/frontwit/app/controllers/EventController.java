package com.frontwit.app.controllers;

import com.frontwit.app.dto.EventDto;
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
    public ResponseEntity<List<EventDto>> getEvents() {
        List<EventDto> eventDtos = eventService.getAllEvents();
        return new ResponseEntity<List<EventDto>>(eventDtos, HttpStatus.OK);
    }

    @RequestMapping(value = "/events/delete", method = RequestMethod.POST)
    @ResponseStatus(HttpStatus.OK)
    public void deleteEvent(@RequestBody Event event) {
        //todo scenariusz na usuwanie eventu
        eventService.deleteEvent(event);
    }

}
