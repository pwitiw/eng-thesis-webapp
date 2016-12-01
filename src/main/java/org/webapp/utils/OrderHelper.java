package org.webapp.utils;

import org.webapp.models.OrderEntity;
import org.webapp.models.TZamowieniaEntity;

/**
 * Created by Patryk on 09.04.2016.
 */
public class OrderHelper {
//TODO modify this piece of shit
    public static OrderEntity assembleInstanceOfOrder(TZamowieniaEntity zam, int amount, String clientName){

        OrderEntity orderEntity = new OrderEntity();
        orderEntity.setId(zam.getId());
        orderEntity.setName(zam.getNumer());
        orderEntity.setCustomerId(1);  //todo tutaj ma byc jakos sprawdzane, czy w bazie danych jest dane nazwisko, jak tak to wyszukaj po id
        orderEntity.setDate(zam.getData_z());
        orderEntity.setPositionId(1);  //tutaj defautowo to daje to bez sensu
        orderEntity.setExpress((short) 0);
        orderEntity.setActive((short) 0);

        return orderEntity;
    }
}
