package com.frontwit.app.migration;

import com.frontwit.app.entities.*;
import com.frontwit.app.entities.TZamowieniaEntity;
import com.frontwit.app.repositories.OrderRepository;
import com.frontwit.app.repositories.TDictionaryRepository;
import com.frontwit.app.repositories.TElementyRepository;
import com.frontwit.app.repositories.daoImpl.*;
import com.frontwit.app.services.ComponentService;
import com.frontwit.app.services.CustomerService;
import com.frontwit.app.services.OrderService;
import com.frontwit.app.services.PositionService;
import org.joda.time.DateTime;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;
import java.util.stream.Collectors;

/**
 * Created by Patryk on 09.04.2016.
 */
//todo caly serwis przeorac jak bedzie gotowa druga apka
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
    @Autowired
    TDictionaryRepository tDictionaryRepository;

    //todo tutaj hacki z ta synchronizacja z od dnia dzisiejszgo, trzeba to ogarnac na spokojnie
    @Transactional
    public List<String> synchronize() {
        List synchronizedOrders = new ArrayList();
        Map<Long, TDictionaryEntity> dictionaryMap = prepareMapForDictionary();
        Date lastSyncDate = synchronizationRepositoryImpl.getLastSyncDate();
        List<TZamowieniaEntity> orders = tZamownieniaRepositorImpl.getFromBistolDbForDateGreaterThanOrEqualsTo(lastSyncDate);
        orders.addAll(getTeKtoreBylyPoSynchronizacjiAleNieWzietePodUwage(lastSyncDate));

        if (orders.size() == 0)
            return new ArrayList<>();
        List<Customer> customers = customerService.getActiveCustomers();

        for (TZamowieniaEntity zam : orders) {
            Customer customer = getCustomer(customers, zam.getTklienci_id());
            Order o = new OrderMapper(zam, customer, dictionaryMap).create();
            if (o == null)
                continue;
            synchronizedOrders.add(o.getName());
            orderService.add(o);
        }

        Synchronization synchronization = new Synchronization();
        synchronization.setAmount(synchronizedOrders.size());
        synchronization.setSyncDate(new Date());
        synchronizationRepositoryImpl.addNewSyncDate(synchronization);

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
            TKlienciEntity klient = tKlienciRepositoryImpl.getCustomerForId(id);

            customer = klient != null ? new Customer(klient) : null;
        }

        return customer;
    }

    Map<Long, TDictionaryEntity> prepareMapForDictionary() {
        Map<Long, TDictionaryEntity> dictionaryMap = new HashMap<>();
        tDictionaryRepository.findAll().stream().forEach(elem -> dictionaryMap.put(elem.getId(), elem));
        return dictionaryMap;
    }

    private List<TZamowieniaEntity> getTeKtoreBylyPoSynchronizacjiAleNieWzietePodUwage(Date lastSyncDate) {
        DateTime dateTime = new DateTime(lastSyncDate);
        Date start= dateTime.withTimeAtStartOfDay().toDate();
        Date end = dateTime.withHourOfDay(23).toDate();
        List<TZamowieniaEntity> todayOrders = tZamownieniaRepositorImpl.findByDataZamBetween(start,end);
        return todayOrders.stream().filter(o -> !orderService.orderExistsForDB(o.getId())).collect(Collectors.toList());
    }

}
