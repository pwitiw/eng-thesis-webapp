package org.webapp.utils;

import org.webapp.models.OrderEntity;
import org.webapp.models.TZamowieniaEntity;

/**
 * Created by Patryk on 09.04.2016.
 */
public class OrderHelper {

    public static OrderEntity assembleInstanceOfOrder(TZamowieniaEntity zam, int amount, String clientName){

        OrderEntity orderEntity = new OrderEntity();
        orderEntity.setId(zam.getId());
        orderEntity.setAmount(amount);
        orderEntity.setOrder_id(zam.getNumer());
        orderEntity.setColor("blblblaaaa"); //todo tutaj dorobic
        orderEntity.setCustomer(clientName);
        orderEntity.setDate(zam.getData_z());
        orderEntity.setStage(1);
        orderEntity.setExpress((short) 0);
        orderEntity.setMissing((short) 0);
        orderEntity.setActive((short) 0);

        return orderEntity;
    }
}
