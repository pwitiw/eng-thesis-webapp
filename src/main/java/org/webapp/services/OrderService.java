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
//todo tutaj ogarnac jak z tym nullem jak parentId jest przeslany
    @Transactional
    public List<OrderEntity> getAllOrders() {
       List<OrderEntity> s= orderRepositoryDAO.getAllOrders();
        for(OrderEntity i:s){
            i.setParentId(2L);
        }
        return s;
       // return orderRepositoryDAO.getAllOrders();
    }

    @Transactional
    public void changeStatusForId(@RequestBody long id) {
        OrderEntity order = orderRepositoryDAO.getOrderForId(id);
        order.setActive(order.getActive() == 1 ? (short) 0 : (short) 1);
        orderRepositoryDAO.addOrderToDb(order);
    }

    @Transactional
    public void add(OrderEntity order) {

        if ((!(order.getName().trim().equals("") || ((Integer)order.getCustomerId()).toString().trim().equals("") ))){ //todo || order.getColor().trim().equals("")))) {
            order.setPositionId(1);
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
//todo tutaj tak troche pokretnie, trzeba na front endzie dac wybor klientow, zeby sie kupy trzymalo
        if (eventService.getEventsForOrder(order).size() > 0)
            return;
        if (newOrder.getName().trim().equals(""))
            return;
        if (((Integer)newOrder.getCustomerId()).toString().trim().equals(""))
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

    public List<OrderEntity> getOrderForStage(Integer stage) {
        return orderRepositoryDAO.getOrderForStage(stage);
    }


    //todo tutaj poprawic, co to w ogole jest upgradeOrder..................
    public OrderEntity upgradeOrder(OrderEntity o) {
        OrderEntity order = orderRepositoryDAO.getOrderForId(o.getId());
        order.setPositionId(o.getPositionId() + 1);

        return orderRepositoryDAO.save(order);
    }
}
