package com.frontwit.app.services;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.databind.util.JSONPObject;
import com.frontwit.app.entities.*;
import com.frontwit.app.entities.TZamowieniaEntity;
import com.frontwit.app.mappers.OrderMapper;
import com.frontwit.app.repositories.TElementyRepository;
import com.frontwit.app.repositories.daoImpl.*;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.StringReader;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 * Created by Patryk on 09.04.2016.
 */
//todo caly serwis przeorac jak bedzie kgotowa druga apka
@Service
public class SyncService {

    @Autowired
    TZamownieniaRepositorImpl tZamownieniaRepositorImpl;
    @Autowired
    TKlienciRepositoryImpl tKlienciRepositoryImpl;
    @Autowired
    SynchronizationRepositoryImpl synchronizationRepositoryImpl;
    @Autowired
    OrderService orderService;
    @Autowired
    ComponentService componentService;
    /*todo tak sie nie robi*/
    @Autowired
    CustomerService customerService;
    @Autowired
    PositionService positionService;

    @Autowired
    TElementyRepository tElementyRepository;

    @Transactional
    public List<String> synchronize() {
        List synchronizedOrders = new ArrayList();
        Date lastSyncDate = synchronizationRepositoryImpl.getLastSyncDate();
        List<TZamowieniaEntity> orders = tZamownieniaRepositorImpl.getFromBistolDbForDateGreaterThan(lastSyncDate);
        if(orders.size() == 0)
            return new ArrayList<>();
        List<Customer> customers = customerService.getActiveCustomers();

        for (TZamowieniaEntity zam : orders) {
            Customer customer = getCustomer(customers, zam.getTklienci_id());
            Order o = new OrderMapper(zam, customer).create();
            if (o == null)
                continue;
            synchronizedOrders.add(o.getName());
            orderService.add(o);
        }

        if (synchronizedOrders.size() != 0) {
            Synchronization synchronization = new Synchronization();
            synchronization.setAmount(synchronizedOrders.size());
            synchronization.setSyncDate(new Date());
            synchronizationRepositoryImpl.addNewSyncDate(synchronization);
        }

        return synchronizedOrders;
    }

    public Customer getCustomer(List<Customer> customers, int id) {
        Customer customer = null;
        for (Customer c : customers) {
            if (c.getId() == id) {
                customer = c;
                break;
            }
        }
        if (customer == null) {
            customer = new Customer(tKlienciRepositoryImpl.getCustomerForId(id));
        }

        return customer;
    }
}
