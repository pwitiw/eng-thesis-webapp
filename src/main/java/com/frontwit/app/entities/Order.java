package com.frontwit.app.entities;


import com.frontwit.app.utils.Config;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

/**
 * Created by Patryk on 2015-10-28.
 */
@Entity
@Table(name = "orders", schema = Config.frontWitDbSchema)
public class Order implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String name;

    @Column(name="customer_id")
    private int customerId;
    @Column(name="position_id")
    private int positionId;

    private short express;

    private Date date;
    @Column(name="last_update")
    private Date lastUpdate;

    @Column(name="parent_id")
    private Long parentId;

    private short active;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getCustomerId() {
        return customerId;
    }

    public void setCustomerId(int customerId) {
        this.customerId = customerId;
    }

    public int getPositionId() {
        return positionId;
    }

    public void setPositionId(int positionId) {
        this.positionId = positionId;
    }

    public short getExpress() {
        return express;
    }

    public void setExpress(short express) {
        this.express = express;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
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


    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Order order = (Order) o;

        if (customerId != order.customerId) return false;
        if (positionId != order.positionId) return false;
        if (express != order.express) return false;
        if (active != order.active) return false;
        if (id != null ? !id.equals(order.id) : order.id != null) return false;
        if (name != null ? !name.equals(order.name) : order.name != null) return false;
        if (date != null ? !date.equals(order.date) : order.date != null) return false;
        if (lastUpdate != null ? !lastUpdate.equals(order.lastUpdate) : order.lastUpdate != null) return false;
        return parentId != null ? parentId.equals(order.parentId) : order.parentId == null;

    }

    @Override
    public int hashCode() {
        int result = id != null ? id.hashCode() : 0;
        result = 31 * result + (name != null ? name.hashCode() : 0);
        result = 31 * result + customerId;
        result = 31 * result + positionId;
        result = 31 * result + (int) express;
        result = 31 * result + (date != null ? date.hashCode() : 0);
        result = 31 * result + (lastUpdate != null ? lastUpdate.hashCode() : 0);
        result = 31 * result + (parentId != null ? parentId.hashCode() : 0);
        result = 31 * result + (int) active;
        return result;
    }
}
