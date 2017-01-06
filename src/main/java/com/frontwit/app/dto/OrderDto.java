package com.frontwit.app.dto;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.frontwit.app.entities.Order;
import java.util.Date;

/**
 * Created by Patryk on 17.12.2016.
 */
public class OrderDto {

    private long id;
    private String name;
    private String customer;
    private String position;
    private String color;
    private Date date;
    private short express;
    private Date lastUpdate;
    private Long parentId;
    private short active;

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

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
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

    public static OrderDto parseOrderDto(Order order) {

        OrderDto orderDto = new OrderDto();
        orderDto.setId(order.getId());
        orderDto.setName(order.getName());
        orderDto.setCustomer(order.getCustomer().getName());
        orderDto.setPosition(order.getPosition().getName());
        orderDto.setColor(order.getColor());
        orderDto.setDate(order.getDate());
        orderDto.setExpress(order.getExpress());
        orderDto.setLastUpdate(order.getLastUpdate());
        orderDto.setParentId(order.getParentId());
        orderDto.setActive(order.getActive());
        return orderDto;
    }
}
