package com.frontwit.app.services;


import com.frontwit.app.dto.PositionDto;
import com.frontwit.app.entities.Position;
import com.frontwit.app.repositories.daoImpl.PositionRepositoryImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by Patryk on 02.01.2017.
 */
@Service
public class PositionService {

    @Autowired
    private PositionRepositoryImpl positionRepositoryImpl;

    @Transactional
    public Position getPositionForName(String name) {
        return positionRepositoryImpl.getPositionForName(name);
    }

    @Transactional
    public List<PositionDto> getWorkerPositions() {
        return getDtosForPositions(positionRepositoryImpl.getWorkerPositions(0));
    }

    @Transactional
    public List<PositionDto> getOrderPositions() {
        return getDtosForPositions(positionRepositoryImpl.getOrderPositions());
    }

    public Position getPositionForId(long id) {
        return positionRepositoryImpl.getPositionForId(id);
    }

    private List<PositionDto> getDtosForPositions(List<Position> positions) {
        List<PositionDto> dtos = new ArrayList<>();
        for (Position p : positions) {
            dtos.add(PositionDto.parsePositionDto(p));
        }
        return dtos;
    }
}
