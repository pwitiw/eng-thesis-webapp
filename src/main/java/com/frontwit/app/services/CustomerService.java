package com.frontwit.app.services;

import com.frontwit.app.entities.Customer;
import com.frontwit.app.entities.Worker;
import com.frontwit.app.exceptions.BadOperationOnResourcesException;
import com.frontwit.app.repositories.daoImpl.CustomerRepositoryImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Created by Patryk on 16.12.2016.
 */
@Service
public class CustomerService {

    @Autowired
    private CustomerRepositoryImpl customerRepositoryImpl;

    @Autowired
    private OrderService orderService;

    public List<Customer> getActiveCustomers() {
        return customerRepositoryImpl.getActiveCustomers();
    }

    public Customer getCustomerForName(String name) {
        return customerRepositoryImpl.getCustomerForName(name);
    }

    public Customer getCustomerForId(long id) {
        return customerRepositoryImpl.getCustomerForId(id);
    }

    @Transactional
    public void deleteCustomerForId(long id) throws BadOperationOnResourcesException {
        Customer customer = customerRepositoryImpl.getCustomerForId(id);
        if (customer == null)
            throw new BadOperationOnResourcesException();
        if (orderService.getOrdersForCustomerId(id).size() > 0)
            setInactivateCustomer(customer);
        else
            customerRepositoryImpl.deleteCustomer(customer);
    }

    @Transactional
    public Customer saveCustomer(Customer customer){
        return customerRepositoryImpl.save(customer);
    }

    private void setInactivateCustomer(Customer customer) {
        customer.setActive((short) 0);
    }

}
