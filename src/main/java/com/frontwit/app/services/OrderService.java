package com.frontwit.app.services;

import com.frontwit.app.dto.OrderDto;
import com.frontwit.app.exceptions.ResourcesNotFoundException;
import com.frontwit.app.repositories.daoImpl.OrderRepositoryImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestBody;
import com.frontwit.app.entities.Order;
import com.frontwit.app.repositories.OrderRepository;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

@Service
public class OrderService {

    @Autowired
    OrderRepositoryImpl orderRepositoryImpl;

    @Autowired
    EventService eventService;

    @Autowired
    PositionService positionService;

    @Autowired
    CustomerService customerService;

    @Transactional
    public List<OrderDto> getAllOrders() {
        return getDtosForOrders(orderRepositoryImpl.getAllOrders());
    }

    @Transactional
    public void changeStatusForId(long id) {
        Order order = orderRepositoryImpl.getOrderForId(id);
        order.setActive(order.getActive() == 1 ? (short) 0 : (short) 1);
    }

    @Transactional
    public void add(Order order) {
//todo Dodawanie zamowienia, validacje do tego
      /*  if ((!(order.getName().trim().equals("") || ((Integer) order.getCustomerId()).toString().trim().equals("")))) { //todo || order.getColor().trim().equals("")))) {
            order.setPositionId(1);
            orderRepositoryImpl.save(order);
        }*/
    }

    //todo Dodać logikę usuwania ordera
    @Transactional
    public void deleteOrder(Long id) {
        Order order = orderRepositoryImpl.getOrderForId(id);
        orderRepositoryImpl.deleteOrder(order);
    }

    @Transactional
    public void updateOrder(OrderDto orderDto) {

        Order updatedOrder = getOrderForDto(orderDto);
        Order order = orderRepositoryImpl.getOrderForId(orderDto.getId());
        copyOrder(order, updatedOrder);
//todo wewnetrzna validacja
      /*
        if (eventService.getEventsForOrder(order).size() > 0)
            return;
        if (newOrder.getName().trim().equals(""))
            return;
        //   if (((Integer) newOrder.getCustomerId()).toString().trim().equals(""))
        //     return;
        if (newOrder.getExpress() < 0 || newOrder.getExpress() > 1)
            return;*/

        orderRepositoryImpl.save(order);
    }

    @Transactional
    public OrderDto getOrderForId(long id) throws ResourcesNotFoundException {

       Order order = orderRepositoryImpl.getOrderForId(id);
        if(order == null)
            throw new ResourcesNotFoundException();
        return OrderDto.parseOrderDto(order);
    }

    private Timestamp getActualTimestamp() {

        Timestamp actualTime = new Timestamp(new java.util.Date().getTime());
        return actualTime;
    }

    @Transactional
    public List<OrderDto> getOrdersForPositionId(Integer posId) {
        return getDtosForOrders(orderRepositoryImpl.getOrdersForPositionId(posId));
    }

    private List<OrderDto> getDtosForOrders(List<Order> orders) {
        List<OrderDto> orderDtos = new ArrayList<>();
        for (Order o : orders) {
            orderDtos.add(OrderDto.parseOrderDto(o));
        }
        return orderDtos;
    }

    private Order getOrderForDto(OrderDto dto) {

        Order order = new Order();
        order.setId(dto.getId());
        order.setName(dto.getName());
        order.setPosition(positionService.getPositionForName(dto.getPosition()));
        order.setExpress(dto.getExpress());
        order.setDate(dto.getDate());
        order.setLastUpdate(dto.getLastUpdate());
        order.setParentId(dto.getParentId());
        order.setActive(dto.getActive());
        order.setCustomer(customerService.getCustomerForName(dto.getCustomer()));

        return order;
    }

    private static void copyOrder(Order order1, Order order2) {

        order1.setId(order2.getId());
        order1.setName(order2.getName());
        order1.setPosition(order2.getPosition());
        order1.setExpress(order2.getExpress());
        order1.setDate(order2.getDate());
        order1.setLastUpdate(order2.getLastUpdate());
        order1.setParentId(order2.getParentId());
        order1.setActive(order2.getActive());
        order1.setCustomer(order2.getCustomer());
    }

}
