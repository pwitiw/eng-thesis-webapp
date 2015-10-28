package org.webapp.dao.Impl;

/**
 * Created by Patryk on 2015-10-28.
 */

import org.springframework.stereotype.Component;
import org.webapp.dao.OrderRepository;
import org.webapp.models.OrderEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by patrykw on 23/10/15.
 */
@Repository("OrderRepositoryDAO")
public class OrderRepositoryDAO {

    @Autowired
    private OrderRepository orderRepository;

    public List<OrderEntity> getOrderList() {

        List<OrderEntity> orders = orderRepository.findAll();
        return orders;
    }

    public OrderEntity getOrderForId(long id) {
        return orderRepository.findById(id);
    }

}