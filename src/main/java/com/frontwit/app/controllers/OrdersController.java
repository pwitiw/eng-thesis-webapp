package com.frontwit.app.controllers;

import com.frontwit.app.services.ComponentService;
import com.frontwit.app.services.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
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
@RestController
public class OrdersController {

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private OrderService orderService;

    @Autowired
    private ComponentService componentService;

    @Autowired
    private SyncService syncService;


    @RequestMapping(value = "/orders", method = RequestMethod.GET)
    public ResponseEntity<List<Order>> allOrders() throws IOException {
        //todo tutaj trzeba ogarnac synchronizacje to bylo sc
        // syncService.synchronize();
        List<Order> orders = orderService.getAllOrders();

        return new ResponseEntity<List<Order>>(orders, HttpStatus.OK);
    }

    @RequestMapping(value = "/orders/add", method = RequestMethod.POST)
    public String addNewWorkerButtonClicked(@ModelAttribute("order") Order newOrder, BindingResult result, SessionStatus status) {

        orderService.add(newOrder);
        return "redirect:/orders";
    }

    @RequestMapping(value = "/orders/delete", method = RequestMethod.POST)
    @ResponseStatus(HttpStatus.OK)
    public void deleteWorker(@RequestBody Order order) {

        orderService.deleteOrder(order);
    }

    @RequestMapping(value = "/orders/modify", method = RequestMethod.POST)
    @ResponseStatus(HttpStatus.OK)
    public void editWorker(@RequestBody Order order) {

        orderService.confirmChangesIfExists(order);
    }

    //todo post tutaj powinien byc
    @RequestMapping(value = "/orders/change-status", method = RequestMethod.GET)
    @ResponseStatus(HttpStatus.OK)
    public void changeStatus(long id) {

        orderService.changeStatusForId(id);
    }

    @RequestMapping(value = "/orders/{id}/components", method = RequestMethod.GET)
    public ResponseEntity<List<Component>> getComponentsForOrderId(@PathVariable("id") Long id) {
        List<Component> components = componentService.getComponents(id);
        return new ResponseEntity(components, HttpStatus.OK);
    }

    @RequestMapping(value = "/orders/{id}", method = RequestMethod.GET)
    public ResponseEntity<Order> getOrderForId(@PathVariable("id") Long id) {
        Order order = orderService.getOrderForId(id);
        return new ResponseEntity<Order>(order, HttpStatus.OK);
    }

//    @RequestMapping(value = "/orders", method = RequestMethod.GET)
//    public ResponseEntity<List<Order>> getOrdersForPos(@RequestParam Integer pos) {
//        List<Order> orders = orderServiceImpl.getOrderForStage(pos);
//        return new ResponseEntity<List<Order>>(orders, HttpStatus.OK);
//    }

    @ExceptionHandler(IOException.class)
    @ResponseBody
    public String handleException(Throwable e) {
        e.getMessage();
        return e.getMessage();
    }

}

