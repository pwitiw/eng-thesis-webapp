package org.webapp.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import org.springframework.transaction.annotation.Transactional;
import org.webapp.dao.OrderRepository;
import org.webapp.models.OrderEntity;

import java.sql.Timestamp;
import java.util.List;

@Service("orderService")
public class OrderService {

    @Autowired
    OrderRepository orderRepository;

    @Transactional
    public List<OrderEntity> getAllOrders() {
        List<OrderEntity> orders = orderRepository.findAll();

        return orders;
    }

    @Transactional
    public void add(OrderEntity order) {

        if ((!(order.getOrder_id().trim().equals("") || order.getCustomer().trim().equals("") || order.getColor().trim().equals("")))) {
            order.setLast_update(getActualTimestamp());
            order.setStage(1);
            orderRepository.save(order);
        }
    }

    public Timestamp getActualTimestamp() {

        Timestamp actualTime = new Timestamp(new java.util.Date().getTime());
        return actualTime;
    }

}
