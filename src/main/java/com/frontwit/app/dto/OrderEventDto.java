package com.frontwit.app.dto;

import com.frontwit.app.entities.Component;
import com.frontwit.app.entities.Order;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

/**
 * Created by Patryk on 04.01.2017.
 */
public class OrderEventDto implements Serializable {

    private long id;
    private String name;
    private String customer;
    private String position;
    private Date date;
    private short express;
    private Date lastUpdate;
    private Long parentId;
    private short active;
    private List<Component> components;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCustomer() {
        return customer;
    }

    public void setCustomer(String customer) {
        this.customer = customer;
    }

    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        this.position = position;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public short getExpress() {
        return express;
    }

    public void setExpress(short express) {
        this.express = express;
    }

    public Date getLastUpdate() {
        return lastUpdate;
    }

    public void setLastUpdate(Date lastUpdate) {
        this.lastUpdate = lastUpdate;
    }

    public Long getParentId() {
        return parentId;
    }

    public void setParentId(Long parentId) {
        this.parentId = parentId;
    }

    public short getActive() {
        return active;
    }

    public void setActive(short active) {
        this.active = active;
    }

    public List<Component> getComponents() {
        return components;
    }

    public void setComponents(List<Component> components) {
        this.components = components;
    }

    public static OrderEventDto parseOrderEventDto(Order order) {

        OrderEventDto orderEventDto = new OrderEventDto();
        orderEventDto.setId(order.getId());
        orderEventDto.setName(order.getName());
        orderEventDto.setCustomer(order.getCustomer().getName());
        orderEventDto.setPosition(order.getPosition().getName());
        orderEventDto.setDate(order.getDate());
        orderEventDto.setExpress(order.getExpress());
        orderEventDto.setLastUpdate(order.getLastUpdate());
        orderEventDto.setParentId(order.getParentId());
        orderEventDto.setActive(order.getActive());
        orderEventDto.setComponents(order.getComponents());
        return orderEventDto;
    }
}
