package com.frontwit.app.utils;

import com.frontwit.app.repositories.PositionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import com.frontwit.app.entities.Position;

import javax.annotation.PostConstruct;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by Patryk on 11.12.2016.
 */
@Component("positions")
public class PositionValues {

     private Map<Integer, String> POSITIONS;

    @Autowired
    PositionRepository positionRepository;

    public PositionValues(List<Position> positions) {
        POSITIONS = new HashMap();
        for (Position p : positions) {
            this.POSITIONS.put(p.getId(), p.getName());
        }
    }

    public PositionValues(){}
    @PostConstruct
    public void init() {
        positionRepository.findAll();
    }


}
