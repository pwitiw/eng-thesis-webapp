package com.frontwit.app.controllers;

import com.frontwit.app.dto.ComponentDto;
import com.frontwit.app.dto.OrderDto;
import com.frontwit.app.dto.OrderComponentDto;
import com.frontwit.app.dto.PositionDto;
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
import com.frontwit.app.services.SyncService;
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
    public ResponseEntity<?> deleteOrder(@PathVariable("id") Long id) {

        orderService.deleteOrder(id);
        return new ResponseEntity(HttpStatus.OK);
    }

    @RequestMapping(value = "/orders/{id}", method = RequestMethod.PUT)
    public ResponseEntity<?> updateOrder(@PathVariable("id") Long id,@RequestBody OrderDto orderDto, BindingResult result) {

       // orderValidator.validate(orderDto, result);
        orderService.updateOrder(orderDto);
        return new ResponseEntity(HttpStatus.OK);
    }

    @RequestMapping(value = "/orders/{id}/change-status", method = RequestMethod.PUT)
    public ResponseEntity<?> changeStatus(@PathVariable("id") Long id) {

        orderService.changeStatusForId(id);
        return new ResponseEntity(HttpStatus.OK);
    }

    @RequestMapping(value = "/orders/{id}/components", method = RequestMethod.GET)
    public ResponseEntity<?> getComponentsForOrderId(@PathVariable("id") Long id) {

        List<ComponentDto> components = componentService.getComponentsForOrderId(id);
        return new ResponseEntity(components, HttpStatus.OK);
    }

    @RequestMapping(value = "/orders/positions", method = RequestMethod.GET)
    public ResponseEntity<?> getOrderPositions() {

        List<PositionDto> positionDtos = positionService.getOrderPositions();
        return new ResponseEntity(positionDtos, HttpStatus.OK);
    }

    //FOR MOBILE DEVICES
    @RequestMapping(value = "/orders/position/{id}", method = RequestMethod.GET)
    public ResponseEntity<?> getOrdersForPositionId(@PathVariable("id") Integer id) {

        List<OrderDto> orders = orderService.getOrdersForPositionId(id);
        return new ResponseEntity(orders, HttpStatus.OK);
    }
}

