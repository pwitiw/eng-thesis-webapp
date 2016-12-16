package com.frontwit.app.utils;

import com.frontwit.app.entities.TZamowieniaEntity;
import com.frontwit.app.entities.Order;

/**
 * Created by Patryk on 09.04.2016.
 */
public class OrderHelper {
//TODO modify this piece of shit
    public static Order assembleInstanceOfOrder(TZamowieniaEntity zam, int amount, String clientName){

        Order order = new Order();
        order.setId(zam.getId());
        order.setName(zam.getNumer());
        order.setCustomerId(1);  //todo tutaj ma byc jakos sprawdzane, czy w bazie danych jest dane nazwisko, jak tak to wyszukaj po id
        order.setDate(zam.getData_z());
        order.setPositionId(1);  //tutaj defautowo to daje to bez sensu
        order.setExpress((short) 0);
        order.setActive((short) 0);

        return order;
    }
}
