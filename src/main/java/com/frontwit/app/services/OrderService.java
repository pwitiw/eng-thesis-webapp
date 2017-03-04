package com.frontwit.app.services;

import com.frontwit.app.dto.OrderComponentWorkerDto;
import com.frontwit.app.dto.OrderDto;
import com.frontwit.app.dto.OrderComponentDto;
import com.frontwit.app.dto.WorkerDto;
import com.frontwit.app.entities.Component;
import com.frontwit.app.entities.Event;
import com.frontwit.app.entities.Worker;
import com.frontwit.app.exceptions.BadOperationOnResourcesException;
import com.frontwit.app.exceptions.ResourcesBadFormatException;
import com.frontwit.app.exceptions.ResourcesNotFoundException;
import com.frontwit.app.repositories.daoImpl.OrderRepositoryImpl;
import com.frontwit.app.utils.Consts;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.stereotype.Service;

import org.springframework.transaction.annotation.Transactional;
import com.frontwit.app.entities.Order;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class OrderService {

    @Autowired
    private OrderRepositoryImpl orderRepositoryImpl;

    @Autowired
    private EventService eventService;

    @Autowired
    private PositionService positionService;

    @Autowired
    private CustomerService customerService;

    @Autowired
    private ComponentService componentService;

    @Autowired
    private WorkerService workerService;

    public OrderService() {
    }

    public OrderService(OrderRepositoryImpl orderRepositoryImpl, EventService eventService) {
        this.orderRepositoryImpl = orderRepositoryImpl;
        this.eventService = eventService;
    }

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
    public Order add(Order order) {
        order.setLastUpdate(new Date());
        return orderRepositoryImpl.save(order);

    }

    @Transactional
    public void deleteOrder(Long id) throws BadOperationOnResourcesException {

        if (eventService.getEventsForOrderId(id).size() > 0)
            throw new BadOperationOnResourcesException(Consts.ORDER_IN_PROGRES_MSG);
        Order order = orderRepositoryImpl.getOrderForId(id);
        if (order == null)
            throw new BadOperationOnResourcesException(Consts.ORDER_DOES_NOT_EXIST_MSG);
        orderRepositoryImpl.deleteOrder(order);

    }

    @Transactional
    public Order updateOrder(OrderComponentDto dto) {

        Order updatedOrder = getOrderForOrderComponentDto(dto);
        Order order = orderRepositoryImpl.getOrderForId(dto.getId());
        copyOrder(order, updatedOrder);

        return orderRepositoryImpl.save(order);
    }

    @Transactional
    public OrderComponentDto getOrderForId(long id) throws ResourcesNotFoundException {

        Order order = orderRepositoryImpl.getOrderForId(id);
        if (order == null)
            throw new ResourcesNotFoundException();
        return OrderComponentDto.parseOrderEventDto(order);
    }

    @Transactional
    public List<OrderDto> getOrdersForPositionId(long posId) {
        if (posId > 0 && posId <= 3)
            return getDtosForOrders(orderRepositoryImpl.getOrdersForPositionIdOrLess(0L, posId));
        else
            return getDtosForOrders(orderRepositoryImpl.getOrdersForPositionIdAndActive(posId));

    }

    @Transactional
    public OrderDto upgradeOrder(OrderComponentWorkerDto orderComponentWorkerDto) throws ResourcesNotFoundException {

        Order order = getOrderForOrderComponentDto(orderComponentWorkerDto.getOrderComponentDto());
        Worker worker = workerService.getWorkerForId(orderComponentWorkerDto.getWorkerDto().getId());
        order.setPosition(positionService.getPositionForId(worker.getPosition().getId() + 1));
        if (order.getComponents() == null)
            order.setComponents(componentService.getComponentsForOrderId(order.getId()));
        else {
            List<Component> missings = getMissingComponentsForOrder(order);
            if (missings.size() > 0) {
                Order child = getChildOrderForOrder(order);
                child.addToComponent(missings);
                orderRepositoryImpl.save(child);
            }
        }
        Event event = new Event(order, worker);
        eventService.save(event);
        return OrderDto.parseOrderDto(orderRepositoryImpl.save(order));
    }

    private List<OrderDto> getDtosForOrders(List<Order> orders) {
        List<OrderDto> orderDtos = new ArrayList<>();
        for (Order o : orders) {
            orderDtos.add(OrderDto.parseOrderDto(o));
        }
        return orderDtos;
    }

    public List<Order> getOrdersForCustomerId(long workerId) {
        return orderRepositoryImpl.getOrdersForCustomerId(workerId);
    }

    private Order getOrderForOrderComponentDto(OrderComponentDto dto) {

        Order order = new Order();
        order.setId(dto.getId());
        order.setName(dto.getName());
        order.setPosition(positionService.getPositionForName(dto.getPosition()));
        order.setColor(dto.getColor());
        order.setExpress(dto.getExpress());
        order.setDate(dto.getDate());
        order.setLastUpdate(dto.getLastUpdate());
        order.setParentId(dto.getParentId());
        order.setActive(dto.getActive());
        order.setCustomer(customerService.getCustomerForName(dto.getCustomer()));
        order.setComponents(componentService.getComponentsForDtos(dto.getComponents()));

        return order;
    }

    private void copyOrder(Order order1, Order order2) {

        order1.setId(order2.getId());
        order1.setName(order2.getName());
        order1.setPosition(order2.getPosition());
        order1.setColor(order2.getColor());
        order1.setExpress(order2.getExpress());
        order1.setDate(order2.getDate());
        order1.setLastUpdate(order2.getLastUpdate());
        order1.setParentId(order2.getParentId());
        order1.setActive(order2.getActive());
        order1.setCustomer(order2.getCustomer());
        order1.getComponents().clear();
        order1.addToComponent(order2.getComponents());
    }

    private Order getChildOrderForOrder(Order order) {

        Order child = new Order();
        child.setParentId(order.getId());
        child.setName(order.getName());
        child.setCustomer(order.getCustomer());
        child.setPosition(positionService.getPositionForId(-1L));
        child.setColor(order.getColor());
        child.setDate(order.getDate());
        child.setExpress(order.getExpress());
        child.setLastUpdate(order.getLastUpdate());
        child.setActive(order.getActive());

        return child;
    }

    private List<Component> getMissingComponentsForOrder(Order order) {
        List<Component> missings = new ArrayList<>();
        if (order.getComponents() == null)
            return missings;
        for (Component component : order.getComponents()) {
            if (component.getMissing() > 0) {
                Component c = new Component();
                c.setWidth(component.getWidth());
                c.setComment(component.getComment());
                c.setHeight(component.getHeight());
                c.setAmount(component.getMissing());
                missings.add(c);
            }
        }
        return missings;
    }

}
