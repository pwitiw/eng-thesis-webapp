package org.webapp.services;

import org.springframework.web.bind.annotation.RequestBody;
import org.webapp.models.OrderEntity;

import java.util.List;

/**
 * Created by Patryk on 08.12.2016.
 */
public interface OrderService {

    List<OrderEntity> getAllOrders();

    void changeStatusForId(long id);

    void add(OrderEntity order);

    void deleteOrder(OrderEntity order);

    void confirmChangesIfExists(OrderEntity newOrder);

    OrderEntity getOrderForId(long id);

    List<OrderEntity> getOrderForStage(Integer stage);
    public OrderEntity upgradeOrder(OrderEntity o);
}
