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
@RequestMapping(value = "/orders")
public class OrdersController {

    @Autowired
    private OrderService orderService;

    @Autowired
    private ComponentService componentService;

    @Autowired
    private SyncService syncService;


    @RequestMapping(value = "/all", method = RequestMethod.GET)
    public ResponseEntity<List<OrderEntity>> allOrders() throws IOException {

        syncService.synchronize();
        List<OrderEntity> orders = orderService.getAllOrders();
        return new ResponseEntity<List<OrderEntity>>(orders, HttpStatus.OK);
    }

    @RequestMapping(value = "/add", method = RequestMethod.POST)
    public String addNewWorkerButtonClicked(@ModelAttribute("order") OrderEntity newOrder, BindingResult result, SessionStatus status) {

        orderService.add(newOrder);
        return "redirect:/orders/all";
    }

    @RequestMapping(value = "/delete", method = RequestMethod.POST)
    @ResponseStatus(HttpStatus.OK)
    public void deleteWorker(@RequestBody OrderEntity order) {

        orderService.deleteOrder(order);
    }

    @RequestMapping(value = "/addChanges", method = RequestMethod.POST)
    @ResponseStatus(HttpStatus.OK)
    public void editWorker(@RequestBody OrderEntity order) {

        orderService.confirmChangesIfExists(order);
    }

    @RequestMapping(value = "/changeStatus", method = RequestMethod.GET)
    @ResponseStatus(HttpStatus.OK)
    public void changeStatus(long id) {

        orderService.changeStatusForId(id);
    }

    @RequestMapping(value = "/{id}/components", method = RequestMethod.GET)
    public ResponseEntity<List<Component>> getComponentsForOrderId(@PathVariable("id") Long id) {
        List<Component> components = componentService.getComponents(id);
        return new ResponseEntity(components, HttpStatus.OK);
    }

    @RequestMapping(value = "/getOne", method = RequestMethod.GET)
    public ResponseEntity<OrderEntity> getOrderForId(@RequestParam Long id) {
        OrderEntity order = orderService.getOrderForId(id);
        return new ResponseEntity<OrderEntity>(order, HttpStatus.OK);
    }

    @RequestMapping(value = "/orders", method = RequestMethod.GET)
    public ResponseEntity<List<OrderEntity>> getOrdersForPos(@RequestParam Integer pos){
        List<OrderEntity> orders = orderService.getOrderForStage(pos);
        return new ResponseEntity<List<OrderEntity>>(orders, HttpStatus.OK);
    }

}

