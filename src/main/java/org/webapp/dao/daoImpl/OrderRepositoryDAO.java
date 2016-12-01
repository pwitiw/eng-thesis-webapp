package org.webapp.dao.daoImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.webapp.dao.OrderRepository;
import org.webapp.models.OrderEntity;

import java.util.List;

/**
 * Created by Patryk on 2015-12-08.
 */

@Repository
public class OrderRepositoryDAO {

    @Autowired
    OrderRepository orderRepository;

    public List<OrderEntity> getAllOrders() {
        return orderRepository.findAll();
    }

    public void addOrderToDb(OrderEntity order) {
        orderRepository.save(order);
    }

    public OrderEntity getOrderForId(long id) {
        return orderRepository.findById(id);
    }

    public void deleteOrderForId(long id) {
        OrderEntity order = orderRepository.findById(id);
        orderRepository.delete(order);
    }

    public List<OrderEntity> getOrderForStage(Integer stage) {
        return orderRepository.findByPositionId(stage);
    }

    public OrderEntity save(OrderEntity o) {
        return orderRepository.save(o);
    }

}
