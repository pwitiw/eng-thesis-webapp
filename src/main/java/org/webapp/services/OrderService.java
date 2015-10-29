package org.webapp.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import org.springframework.transaction.annotation.Transactional;
import org.webapp.repository.OrderRepository;
import org.webapp.models.OrderEntity;

import java.util.ArrayList;
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
}
