package com.frontwit.app.dto;

import com.frontwit.app.entities.Position;

import java.io.Serializable;

/**
 * Created by Patryk on 04.01.2017.
 */
public class PositionDto implements Serializable {

    private long id;
    private String name;

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

    public static PositionDto parsePositionDto(Position position) {

        PositionDto positionDto = new PositionDto();
        positionDto.setId(position.getId());
        positionDto.setName(position.getName());
        return positionDto;
    }
}

