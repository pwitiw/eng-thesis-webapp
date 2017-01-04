package com.frontwit.app.dto;

import com.frontwit.app.entities.Component;
import com.frontwit.app.entities.Order;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

/**
 * Created by Patryk on 04.01.2017.
 */
public class OrderComponentDto implements Serializable {

    private long id;
    private String name;
    private String customer;
    private String position;
    private Date date;
    private short express;
    private Date lastUpdate;
    private Long parentId;
    private short active;
    private List<ComponentDto> components;

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

    public List<ComponentDto> getComponents() {
        return components;
    }

    public void setComponents(List<ComponentDto> components) {
        this.components = components;
    }

    public static OrderComponentDto parseOrderEventDto(Order order) {

        OrderComponentDto orderComponentDto = new OrderComponentDto();
        orderComponentDto.setId(order.getId());
        orderComponentDto.setName(order.getName());
        orderComponentDto.setCustomer(order.getCustomer().getName());
        orderComponentDto.setPosition(order.getPosition().getName());
        orderComponentDto.setDate(order.getDate());
        orderComponentDto.setExpress(order.getExpress());
        orderComponentDto.setLastUpdate(order.getLastUpdate());
        orderComponentDto.setParentId(order.getParentId());
        orderComponentDto.setActive(order.getActive());
        orderComponentDto.setComponents(ComponentDto.parseComponentDtos(order.getComponents()));
        return orderComponentDto;
    }
}
