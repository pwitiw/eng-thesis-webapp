package com.frontwit.app.services;

import com.frontwit.app.repositories.daoImpl.OrderRepositoryImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestBody;
import com.frontwit.app.entities.Order;
import com.frontwit.app.repositories.OrderRepository;

import java.sql.Timestamp;
import java.util.List;

@Service
@Transactional
public class OrderService{

    @Autowired
    OrderRepositoryImpl orderRepositoryImpl;

    @Autowired
    EventService eventService;

    //todo tutaj ogarnac jak z tym nullem jak parentId jest przeslany
    @Transactional
    public List<Order> getAllOrders() {
        List<Order> s = orderRepositoryImpl.getAllOrders();
        for (Order i : s) {
            i.setParentId(2L);
        }
        return s;
        // return orderRepositoryDAO.getAllOrders();
    }

    @Transactional
    public void changeStatusForId(long id) {
        Order order = orderRepositoryImpl.getOrderForId(id);
        order.setActive(order.getActive() == 1 ? (short) 0 : (short) 1);
    }

    @Transactional
    public void add(Order order) {

        if ((!(order.getName().trim().equals("") || ((Integer) order.getCustomerId()).toString().trim().equals("")))) { //todo || order.getColor().trim().equals("")))) {
            order.setPositionId(1);
            orderRepositoryImpl.save(order);
        }
    }

    @Transactional
    public void deleteOrder(Long id) {
        orderRepositoryImpl.deleteOrderForId(id);
    }

    @Transactional
    public void confirmChangesIfExists(Order newOrder) {

        Order order = orderRepositoryImpl.getOrderForId(newOrder.getId());
//todo tutaj tak troche pokretnie, trzeba na front endzie dac wybor klientow, zeby sie kupy trzymalo
        if (eventService.getEventsForOrder(order).size() > 0)
            return;
        if (newOrder.getName().trim().equals(""))
            return;
        if (((Integer) newOrder.getCustomerId()).toString().trim().equals(""))
            return;
        if (newOrder.getExpress() < 0 || newOrder.getExpress() > 1)
            return;

        orderRepositoryImpl.save(newOrder);
    }

    @Transactional
    public Order getOrderForId(long id) {
        return orderRepositoryImpl.getOrderForId(id);
    }

    private Timestamp getActualTimestamp() {

        Timestamp actualTime = new Timestamp(new java.util.Date().getTime());
        return actualTime;
    }

    public List<Order> getOrderForStage(Integer position) {
        return orderRepositoryImpl.getOrderForPositionId(position);
    }

}
