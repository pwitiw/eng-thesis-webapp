package com.frontwit.app.controllers;

import com.frontwit.app.dto.ComponentDto;
import com.frontwit.app.dto.OrderDto;
import com.frontwit.app.services.ComponentService;
import com.frontwit.app.services.OrderService;
import com.frontwit.app.utils.FrontWitRestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.Validator;
import org.springframework.validation.beanvalidation.CustomValidatorBean;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.support.SessionStatus;
import com.frontwit.app.entities.Order;
import com.frontwit.app.repositories.OrderRepository;
import com.frontwit.app.entities.Component;
import com.frontwit.app.services.SyncService;

import java.io.IOException;
import java.util.List;


/**
 * Created by Patryk on 2015-10-28.
 */
@FrontWitRestController
public class OrderController {

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private OrderService orderService;

    @Autowired
    private ComponentService componentService;

    @Autowired
    private SyncService syncService;

    @RequestMapping(value = "/orders", method = RequestMethod.GET)
    public ResponseEntity<List<OrderDto>> getOrders() throws IOException {
        //todo tutaj trzeba ogarnac synchronizacje to bylo syncService.synchronize();
        List<OrderDto> orders = orderService.getAllOrders();
        return new ResponseEntity<List<OrderDto>>(orders, HttpStatus.OK);
    }

    @RequestMapping(value = "/orders/{id}", method = RequestMethod.GET)
    public ResponseEntity<Order> getOrderForId(@PathVariable("id") Long id) {
        Order order = orderService.getOrderForId(id);
        return new ResponseEntity<Order>(order, HttpStatus.OK);
    }

    @RequestMapping(value = "/orders/{id}/delete", method = RequestMethod.POST)
    public HttpStatus deleteWorkerForId(@PathVariable("id") Long id) {
        //todo zrobic conditions do usuwania ordera
        orderService.deleteOrder(id);
        return HttpStatus.OK;

    }

    @RequestMapping(value = "/orders/update-order", method = RequestMethod.POST)
    @ResponseStatus(HttpStatus.OK)
    public void editWorker(@RequestBody Order order) {
        orderService.confirmChangesIfExists(order);
    }

    @RequestMapping(value = "/orders/{id}/change-status", method = RequestMethod.POST)
    @ResponseStatus(HttpStatus.OK)
    public void changeStatus(@PathVariable("id") Long id) {
        orderService.changeStatusForId(id);
    }

    @RequestMapping(value = "/orders/{id}/components", method = RequestMethod.GET)
    public ResponseEntity<?> getComponentsForOrderId(@PathVariable("id") Long id) {
        List<ComponentDto> components= componentService.getComponentsForOrderId(id);
        return new ResponseEntity(components, HttpStatus.OK);
    }

    @ExceptionHandler(IOException.class)
    @ResponseBody
    public String handleException(Throwable e) {
        e.getMessage();
        return e.getMessage();
    }

}

