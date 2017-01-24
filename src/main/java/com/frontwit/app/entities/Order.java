package com.frontwit.app.entities;


import com.frontwit.app.utils.Config;
import org.hibernate.validator.constraints.Range;

import javax.persistence.*;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.Table;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 * Created by Patryk on 2015-10-28.
 */
@Entity
@Table(name = "orders", schema = Config.FRONTWIT_DB_SCHEMA)
public class Order implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id=0;

    private String name;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "POSITION_ID")
    private Position position;

    private String color;

    @Range(min = 0, max = 1)
    private short express;

    private Date date;

    @Column(name = "LAST_UPDATE")
    private Date lastUpdate;

    @Column(name = "parent_id")
    private Long parentId;

    @Range(min = 0, max = 1)
    private short active;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "CUSTOMER_ID")
    private Customer customer;

    @OneToMany(mappedBy = "order", fetch = FetchType.LAZY, cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Component> components;

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

    public void setId(long id) {
        this.id = id;
    }

    public Position getPosition() {
        return position;
    }

    public void setPosition(Position position) {
        this.position = position;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
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

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public List<Component> getComponents() {
        return components;
    }

    public void setComponents(List<Component> components) {
        this.components = components;
    }

    public void addToComponent(List<Component> components) {
        if (this.components == null)
            this.components = new ArrayList<>();
        for (Component component : components) {
            component.setOrder(this);
            this.components.add(component);
        }
    }

    public Integer getMissingAmount() {
        int counter = 0;
        if (components == null)
            return 0;
        for (Component component : components) {
            counter += component.getMissing();
        }
        return counter;
    }

}
