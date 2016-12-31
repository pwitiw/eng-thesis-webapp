package com.frontwit.app.dto;

import com.frontwit.app.entities.Component;

import java.io.Serializable;

/**
 * Created by Patryk on 18.12.2016.
 */
public class ComponentDto implements Serializable {

    private long id;
    private String orderName;
    private int width;
    private int height;
    private int amount;
    private int missing;
    private String comment;

    public ComponentDto(Component component) {
        this.id = component.getId();
        this.orderName = component.getOrder().getName();
        this.width = component.getWidth();
        this.height = component.getHeight();
        this.amount = component.getAmount();
        this.missing = component.getMissing();
        this.comment = component.getComment();
    }

    public long getId() {
        return id;
    }

    public String getOrderName() {
        return orderName;
    }

    public int getWidth() {
        return width;
    }

    public int getHeight() {
        return height;
    }

    public int getAmount() {
        return amount;
    }

    public int getMissing() {
        return missing;
    }

    public String getComment() {
        return comment;
    }
}
