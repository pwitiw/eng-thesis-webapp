package org.webapp.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.support.SessionStatus;
import org.webapp.models.Component;
import org.webapp.models.OrderEntity;
import org.webapp.services.ComponentService;
import org.webapp.services.OrderService;
import org.webapp.services.SyncService;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.List;


/**
 * Created by Patryk on 2015-10-28.
 */
@Controller
public class OrdersController {

    @Autowired
    private OrderService orderService;

    @Autowired
    private ComponentService componentService;

    @Autowired
    private SyncService syncService;


    @RequestMapping(value = "/orders", method = RequestMethod.GET)
    public ResponseEntity<List<OrderEntity>> allOrders() throws IOException {
        //todo tutaj trzeba ogarnac synchronizacje to bylo sc
        // syncService.synchronize();
        List<OrderEntity> orders = orderService.getAllOrders();

        return new ResponseEntity<List<OrderEntity>>(orders, HttpStatus.OK);
    }

    @RequestMapping(value = "/orders/add", method = RequestMethod.POST)
    public String addNewWorkerButtonClicked(@ModelAttribute("order") OrderEntity newOrder, BindingResult result, SessionStatus status) {

        orderService.add(newOrder);
        return "redirect:/orders";
    }

    @RequestMapping(value = "/orders/delete", method = RequestMethod.POST)
    @ResponseStatus(HttpStatus.OK)
    public void deleteWorker(@RequestBody OrderEntity order) {

        orderService.deleteOrder(order);
    }

    @RequestMapping(value = "/orders/modify", method = RequestMethod.POST)
    @ResponseStatus(HttpStatus.OK)
    public void editWorker(@RequestBody OrderEntity order) {

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
    public ResponseEntity<OrderEntity> getOrderForId(@PathVariable("id") Long id) {
        OrderEntity order = orderService.getOrderForId(id);
        return new ResponseEntity<OrderEntity>(order, HttpStatus.OK);
    }

//    @RequestMapping(value = "/orders", method = RequestMethod.GET)
//    public ResponseEntity<List<OrderEntity>> getOrdersForPos(@RequestParam Integer pos) {
//        List<OrderEntity> orders = orderService.getOrderForStage(pos);
//        return new ResponseEntity<List<OrderEntity>>(orders, HttpStatus.OK);
//    }

    @ExceptionHandler(IOException.class)
    @ResponseBody
    public String handleException(Throwable e) {
        e.getMessage();
        return e.getMessage();
    }

}

