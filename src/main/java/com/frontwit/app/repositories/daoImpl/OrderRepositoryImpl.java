package com.frontwit.app.repositories.daoImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import com.frontwit.app.entities.Order;
import com.frontwit.app.repositories.OrderRepository;

import java.util.List;

/**
 * Created by Patryk on 2015-12-08.
 */

@Component
public class OrderRepositoryImpl {

    @Autowired
    OrderRepository orderRepository;

    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }

    public void addOrderToDb(Order order) {
        orderRepository.save(order);
    }

    public Order getOrderForId(long id) {
        return orderRepository.findById(id);
    }

    public void deleteOrderForId(long id) {
        Order order = orderRepository.findById(id);
        orderRepository.delete(order);
    }

    public List<Order> getOrderForPositionId(Integer stage) {
        return orderRepository.findByPositionId(stage);
    }

    public Order save(Order o) {
        return orderRepository.save(o);
    }

}
