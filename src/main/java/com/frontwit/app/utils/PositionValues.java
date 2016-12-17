package com.frontwit.app.utils;

import com.frontwit.app.repositories.PositionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import com.frontwit.app.entities.Position;

import javax.annotation.PostConstruct;
import java.util.*;

/**
 * Created by Patryk on 11.12.2016.
 */
@Component("positions")
public class PositionValues {

    @Autowired
    PositionRepository positionRepository;

    private static Map<Integer, String> POSITIONS;

    public PositionValues() {
        POSITIONS = new HashMap<>();
    }

    @PostConstruct
    public void init() {
        List<Position> positions = positionRepository.findAll();
        for (Position p : positions) {
            this.POSITIONS.put(p.getId(), p.getName());
        }
    }

    public static List<String> getStrigValues() {
        return (List<String>) POSITIONS.values();
    }

    public static String getValueForKey(int key) {
        return POSITIONS.get(key);
    }

    public static int getKeyForValue(String value) {
        POSITIONS.keySet();
        for (int key : POSITIONS.keySet()) {
            POSITIONS.get(key).equals(value);
            return key;
        }
        return 0;
    }

}
