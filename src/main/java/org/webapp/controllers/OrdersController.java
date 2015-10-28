package org.webapp.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

/**
 * Created by Patryk on 2015-10-28.
 */
@Controller
public class OrdersController {

    @RequestMapping(value = "/orders", method = RequestMethod.GET)
    public String printOrderList(ModelAndView modelAndView) {


        return "orders";
    }


}
