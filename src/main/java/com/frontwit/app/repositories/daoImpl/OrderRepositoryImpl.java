package com.frontwit.app.repositories.daoImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import com.frontwit.app.entities.Order;
import com.frontwit.app.repositories.OrderRepository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Created by Patryk on 2015-12-08.
 */

@Component
@Transactional
public class OrderRepositoryImpl {

    @Autowired
    OrderRepository orderRepository;

    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }

    public Order save(Order o) {
        return orderRepository.saveAndFlush(o);
    }

    public Order getOrderForId(long id) {
        return orderRepository.findById(id);
    }

    public void deleteOrder(Order order) {
        orderRepository.delete(order);
    }

    public List<Order> getOrdersForPositionId(long position) {
        return orderRepository.findByPositionId(position);
    }



}
