package org.webapp.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.webapp.models.OrderEntity;
import org.webapp.services.OrderService;

import java.util.List;


/**
 * Created by Patryk on 2015-10-28.
 */
@Controller
@RequestMapping(value = "/orders")
public class OrdersController {

    @Autowired
    private OrderService orderService;

    @RequestMapping(value = "/list", method = RequestMethod.GET)
    public String printOrderList(Model model) {

        List<OrderEntity> orders = orderService.getAllOrders();
        model.addAttribute("orders", orders);
        return "orders";
    }


}

