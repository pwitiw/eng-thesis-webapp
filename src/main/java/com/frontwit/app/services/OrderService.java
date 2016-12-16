package com.frontwit.app.services;

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
    OrderRepository orderRepository;

    @Autowired
    EventService eventService;

    //todo tutaj ogarnac jak z tym nullem jak parentId jest przeslany
    @Transactional
    public List<Order> getAllOrders() {
        List<Order> s = orderRepository.findAll();
        for (Order i : s) {
            i.setParentId(2L);
        }
        return s;
        // return orderRepositoryDAO.getAllOrders();
    }

    @Transactional
    public void changeStatusForId(@RequestBody long id) {
        Order order = orderRepository.findById(id);
        order.setActive(order.getActive() == 1 ? (short) 0 : (short) 1);
        orderRepository.save(order);
    }

    @Transactional
    public void add(Order order) {

        if ((!(order.getName().trim().equals("") || ((Integer) order.getCustomerId()).toString().trim().equals("")))) { //todo || order.getColor().trim().equals("")))) {
            order.setPositionId(1);
            orderRepository.save(order);
        }
    }

    @Transactional
    public void deleteOrder(Order order) {
        long id = order.getId();
        Order o = orderRepository.findById(id);
        orderRepository.delete(o);
    }

    @Transactional
    public void confirmChangesIfExists(Order newOrder) {

        Order order = orderRepository.findById(newOrder.getId());
//todo tutaj tak troche pokretnie, trzeba na front endzie dac wybor klientow, zeby sie kupy trzymalo
        if (eventService.getEventsForOrder(order).size() > 0)
            return;
        if (newOrder.getName().trim().equals(""))
            return;
        if (((Integer) newOrder.getCustomerId()).toString().trim().equals(""))
            return;
        if (newOrder.getExpress() < 0 || newOrder.getExpress() > 1)
            return;

        orderRepository.save(newOrder);
    }

    @Transactional
    public Order getOrderForId(long id) {
        return orderRepository.findById(id);
    }

    private Timestamp getActualTimestamp() {

        Timestamp actualTime = new Timestamp(new java.util.Date().getTime());
        return actualTime;
    }

    public List<Order> getOrderForStage(Integer stage) {
        return orderRepository.findByPositionId(stage);
    }


    //todo tutaj poprawic, co to w ogole jest upgradeOrder..................
    public Order upgradeOrder(Order o) {
        Order order = orderRepository.findById(o.getId());
        order.setPositionId(o.getPositionId() + 1);

        return orderRepository.save(order);
    }
}
