package com.frontwit.app.dto;

import com.frontwit.app.entities.Component;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

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

    public int getWidth() {
        return width;
    }

    public void setWidth(int width) {
        this.width = width;
    }

    public int getHeight() {
        return height;
    }

    public void setHeight(int height) {
        this.height = height;
    }

    public int getAmount() {
        return amount;
    }

    public void setAmount(int amount) {
        this.amount = amount;
    }

    public int getMissing() {
        return missing;
    }

    public void setMissing(int missing) {
        this.missing = missing;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public static ComponentDto parseComponentDto(Component component) {

        ComponentDto dto = new ComponentDto();
        dto.setId(component.getId());
        dto.setOrderName(component.getOrder().getName());
        dto.setWidth(component.getWidth());
        dto.setHeight(component.getHeight());
        dto.setAmount(component.getAmount());
        dto.setMissing(component.getMissing());
        dto.setComment(component.getComment());
        return dto;
    }

    public static List<ComponentDto> parseComponentDtos(List<Component> components) {

        List<ComponentDto> dtos = new ArrayList<>();
        for (Component component : components) {
            dtos.add(ComponentDto.parseComponentDto(component));
        }
        return dtos;
    }
}
