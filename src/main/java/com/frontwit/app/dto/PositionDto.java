package com.frontwit.app.dto;

import com.frontwit.app.entities.Position;


public class PositionDto {


    private int id;
    private String name;

    public PositionDto() {
    }

    public PositionDto(Position position) {
        this.id = position.getId();
        this.name = position.getName();
    }

    public PositionDto(int id, String name) {
        this.id = id;
        this.name = name;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
