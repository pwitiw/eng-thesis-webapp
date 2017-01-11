package com.frontwit.app.controllers;

import com.frontwit.app.entities.Customer;
import com.frontwit.app.exceptions.BadOperationOnResourcesException;
import com.frontwit.app.services.CustomerService;
import com.frontwit.app.utils.FrontWitRestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.List;

/**
 * Created by Patryk on 16.12.2016.
 */
@FrontWitRestController
public class CustomerController {

    @Autowired
    CustomerService customerService;

    @RequestMapping(value = "/customers", method = RequestMethod.GET)
    public ResponseEntity<?> getActiveCustomers() {

        List<Customer> customers = customerService.getActiveCustomers();
        return new ResponseEntity<List<Customer>>(customers, HttpStatus.OK);
    }

    @RequestMapping(value = "/customers/{id}", method = RequestMethod.GET)
    public ResponseEntity<?> getCustomerForId(@PathVariable("id") Long id) {

        Customer customer = customerService.getCustomerForId(id);
        return new ResponseEntity<Customer>(customer, HttpStatus.OK);
    }

    @RequestMapping(value = "/customers/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<?> deleteCustomerForId(@PathVariable("id") Long id)
            throws BadOperationOnResourcesException {

        customerService.deleteCustomerForId(id);
        return new ResponseEntity(HttpStatus.OK);
    }
}
