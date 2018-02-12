package com.frontwit.app.controllers;

import com.frontwit.app.dto.*;
import com.frontwit.app.exceptions.BadOperationOnResourcesException;
import com.frontwit.app.exceptions.ResourcesBadFormatException;
import com.frontwit.app.exceptions.ResourcesNotFoundException;
import com.frontwit.app.services.ComponentService;
import com.frontwit.app.services.OrderService;
import com.frontwit.app.services.PositionService;
import com.frontwit.app.validators.OrderValidator;
import com.frontwit.app.utils.FrontWitRestController;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import com.frontwit.app.migration.SyncService;
import org.springframework.beans.factory.annotation.Autowired;

import java.io.IOException;
import java.util.List;


/**
 * Created by Patryk on 2015-10-28.
 */
@FrontWitRestController
public class OrderController {

    @Autowired
    private OrderService orderService;

    @Autowired
    private ComponentService componentService;

    @Autowired
    private PositionService positionService;

    @Autowired
    private OrderValidator orderValidator;

    @Autowired
    private SyncService syncService;

    @RequestMapping(value = "/orders", method = RequestMethod.GET)
    public ResponseEntity<?> getOrders() throws IOException {

        List<OrderDto> orders = orderService.getAllOrders();
        return new ResponseEntity<List<OrderDto>>(orders, HttpStatus.OK);
    }

    //todo trzeba ogarnac synchronizacje, to bylo syncService.synchronize();

    @RequestMapping(value = "/orders/{id}", method = RequestMethod.GET)
    public ResponseEntity<?> getOrderForId(@PathVariable("id") Long id)
            throws ResourcesNotFoundException {

        OrderComponentDto orderComponentDto = orderService.getOrderForId(id);
        return new ResponseEntity<OrderComponentDto>(orderComponentDto, HttpStatus.OK);
    }

    @RequestMapping(value = "/orders/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<?> deleteOrder(@PathVariable("id") Long id)
            throws BadOperationOnResourcesException {

        orderService.deleteOrder(id);
        return new ResponseEntity(HttpStatus.OK);
    }

    @RequestMapping(value = "/orders/{id}", method = RequestMethod.PUT)
    public ResponseEntity<?> updateOrder(@PathVariable("id") Long id, @RequestBody OrderComponentDto orderComponentDto, BindingResult result)
            throws ResourcesBadFormatException {

        orderValidator.validate(orderComponentDto, result);
        if (result.hasErrors())
            throw new ResourcesBadFormatException();
        orderService.updateOrder(orderComponentDto);
        return new ResponseEntity(HttpStatus.OK);
    }

    @RequestMapping(value = "/orders/{id}/change-status", method = RequestMethod.PUT)
    public ResponseEntity<?> changeStatus(@PathVariable("id") Long id) {

        orderService.changeStatusForId(id);
        return new ResponseEntity(HttpStatus.OK);
    }

    @RequestMapping(value = "/orders/{id}/components", method = RequestMethod.GET)
    public ResponseEntity<?> getComponentsForOrderId(@PathVariable("id") Long id) {

        List<ComponentDto> components = componentService.getComponentsDtoForOrderId(id);
        return new ResponseEntity(components, HttpStatus.OK);
    }

    @RequestMapping(value = "/orders/positions", method = RequestMethod.GET)
    public ResponseEntity<?> getOrderPositions() {

        List<PositionDto> positionDtos = positionService.getOrderPositions();
        return new ResponseEntity(positionDtos, HttpStatus.OK);
    }

    //FOR MOBILE DEVICES
    @RequestMapping(value = "/orders/positions/{id}", method = RequestMethod.GET)
    public ResponseEntity<?> getOrdersForPositionId(@PathVariable("id") Integer id) {

        List<OrderDto> orders = orderService.getOrdersForPositionId(id);
        return new ResponseEntity(orders, HttpStatus.OK);
    }

    @RequestMapping(value = "/orders/events", method = RequestMethod.PUT)
    public ResponseEntity updateOrderAndEvents(@RequestBody OrderComponentWorkerDto orderComponentWorkerDto)
            throws ResourcesNotFoundException {


        OrderDto orderDto = orderService.upgradeOrder(orderComponentWorkerDto);
        return new ResponseEntity<OrderDto>(orderDto, HttpStatus.OK);
    }

//    @RequestMapping(value = "/test/{id}", method = RequestMethod.GET)
//    public ResponseEntity updateOrderAndEvents(@PathVariable("id") Integer id)
//            throws ResourcesNotFoundException {
//
//        orderService.test(id);
//        return new ResponseEntity("Test", HttpStatus.OK);
//    }



}

