package com.frontwit.app.controllers;

import com.frontwit.app.dto.EventDto;
import com.frontwit.app.dto.WorkerEventDto;
import com.frontwit.app.entities.Event;
import com.frontwit.app.services.EventService;
import com.frontwit.app.utils.FrontWitRestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by Patryk on 2016-01-05.
 */
@FrontWitRestController
public class EventController {

    @Autowired
    EventService eventService;

    @RequestMapping(value = "/events", method = RequestMethod.GET)
    public ResponseEntity<?> getEvents() {
        List<EventDto> eventDtos = eventService.getAllEvents();
        return new ResponseEntity<List<EventDto>>(eventDtos, HttpStatus.OK);
    }

    @RequestMapping(value = "/events/{order-id}/{position-id}", method = RequestMethod.DELETE)
    public ResponseEntity deleteEvent(@PathVariable("order-id") Long orderId, @PathVariable("position-id") Long positionId) {
        //eventService.deleteEvent(orderId, positionId);
        return new ResponseEntity(HttpStatus.OK);
    }

}
