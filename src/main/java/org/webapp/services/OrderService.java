package org.webapp.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestBody;
import org.webapp.dao.daoImpl.OrderRepositoryDAO;
import org.webapp.models.OrderEntity;

import java.sql.Timestamp;
import java.util.List;

@Service("orderService")
public class OrderService {

    @Autowired
    OrderRepositoryDAO orderRepositoryDAO;

    @Autowired
    EventService eventService;

    @Transactional
    public List<OrderEntity> getAllOrders() {
        return orderRepositoryDAO.getAllOrders();
    }

    @Transactional
    public void changeStatusForId(@RequestBody long id) {
        OrderEntity order = orderRepositoryDAO.getOrderForId(id);
        order.setActive(order.getActive() == 1 ? (short) 0 : (short) 1);
        orderRepositoryDAO.addOrderToDb(order);
    }

    @Transactional
    public void add(OrderEntity order) {

        if ((!(order.getOrder_id().trim().equals("") || order.getCustomer().trim().equals("") || order.getColor().trim().equals("")))) {
            order.setStage(1);
            orderRepositoryDAO.addOrderToDb(order);
        }
    }

    @Transactional
    public void deleteOrder(OrderEntity order) {
        orderRepositoryDAO.deleteOrderForId(order.getId());
    }

    @Transactional
    public void confirmChangesIfExists(OrderEntity newOrder) {

        OrderEntity order = orderRepositoryDAO.getOrderForId(newOrder.getId());

        if (eventService.getEventsForOrder(order).size() > 0)
            return;
        if (newOrder.getOrder_id().trim().equals(""))
            return;
        if (newOrder.getCustomer().trim().equals(""))
            return;
        if (newOrder.getColor().trim().equals(""))
            return;
        if (newOrder.getExpress() < 0 || newOrder.getExpress() > 1)
            return;

        orderRepositoryDAO.addOrderToDb(newOrder);
    }

    @Transactional
    public OrderEntity getOrderForId(long id) {
        return orderRepositoryDAO.getOrderForId(id);
    }

    private Timestamp getActualTimestamp() {

        Timestamp actualTime = new Timestamp(new java.util.Date().getTime());
        return actualTime;
    }

}
