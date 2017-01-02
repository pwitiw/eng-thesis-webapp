package com.frontwit.app.services;

import com.frontwit.app.dto.PositionDto;
import com.frontwit.app.entities.Position;
import com.frontwit.app.repositories.PositionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
public class PositionServices {

    @Autowired
    PositionRepository positionRepository;

    @Transactional
    public List<PositionDto> getPositions() {
        return getDtosForPosition(positionRepository.findAll());
    }

    private List<PositionDto> getDtosForPosition(List<Position> positions) {
        List<PositionDto> positionDtos = new ArrayList<>();
        for (Position p : positions) {
            PositionDto positionDto = new PositionDto(p);
            positionDtos.add(positionDto);
        }
        return positionDtos;
    }
}
