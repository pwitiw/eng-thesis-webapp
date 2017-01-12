package com.frontwit.app.repositories.daoImpl;

import com.frontwit.app.entities.Position;
import com.frontwit.app.repositories.PositionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Created by Patryk on 02.01.2017.
 */
@Component
@Transactional
public class PositionRepositoryImpl {

    @Autowired
    private PositionRepository positionRepository;

    public Position getPositionForName(String name) {
        return positionRepository.findByName(name);
    }

    public List<Position> getWorkerPositions(long id) {
        return positionRepository.findByIdGreaterThan(id);
    }

    public List<Position> getOrderPositions() {
        return positionRepository.findAll();
    }

    public Position getPositionForId(long id) {return positionRepository.findById(id);}
}
