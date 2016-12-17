package com.frontwit.app.dto;

import com.frontwit.app.entities.Order;
import com.frontwit.app.utils.PositionValues;

import javax.persistence.Column;
import java.util.Date;

/**
 * Created by Patryk on 17.12.2016.
 */
public class OrderDto {

    private long id;
    private String orderName;
    private String customer;
    private String position;
    private Date date;
    private short express;
    private Date lastUpdate;
    private Long parentId;
    private short active;

    public OrderDto(Order order) {
        this.id = order.getId();
        this.orderName = order.getName();
        this.customer = order.getCustomer().getName();
        this.position = order.getPosition().getName();
        this.date = order.getDate();
        this.express = order.getExpress();
        this.lastUpdate = order.getLastUpdate();
        this.parentId = order.getParentId();
        this.active = order.getActive();
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getOrderName() {
        return orderName;
    }

    public void setOrderName(String orderName) {
        this.orderName = orderName;
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
}
