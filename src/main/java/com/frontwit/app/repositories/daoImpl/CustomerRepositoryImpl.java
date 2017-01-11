package com.frontwit.app.repositories.daoImpl;

import com.frontwit.app.entities.Customer;
import com.frontwit.app.entities.Worker;
import com.frontwit.app.repositories.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

/**
 * Created by Patryk on 16.12.2016.
 */
@Component
public class CustomerRepositoryImpl {

    @Autowired
    CustomerRepository customerRepository;

    public List<Customer> getActiveCustomers() {
        return customerRepository.findByActive((short) 1);
    }

    public Customer getCustomerForName(String name) {
        return customerRepository.findByName(name);
    }

    public Customer getCustomerForId(long id){return customerRepository.findById(id);}

    public Customer save(Customer customer){return customerRepository.saveAndFlush(customer);}

    public void deleteCustomer(Customer customer){customerRepository.delete(customer);}
}
