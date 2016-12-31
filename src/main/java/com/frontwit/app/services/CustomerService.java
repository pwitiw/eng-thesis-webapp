package com.frontwit.app.services;

import com.frontwit.app.entities.Customer;
import com.frontwit.app.repositories.daoImpl.CustomerRepositoryImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by Patryk on 16.12.2016.
 */
@Service
public class CustomerService {

    @Autowired
    private CustomerRepositoryImpl customerRepository;

    public List<Customer> getActiveCustomers() {
        return customerRepository.getActiveCustomers();
    }

}
