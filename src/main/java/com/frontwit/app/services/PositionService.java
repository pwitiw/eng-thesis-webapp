package com.frontwit.app.services;


import com.frontwit.app.entities.Position;
import com.frontwit.app.repositories.daoImpl.PositionRepositoryImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by Patryk on 02.01.2017.
 */
@Service
public class PositionService {

    @Autowired
    private PositionRepositoryImpl positionRepositoryImpl;

    public Position getPositionForName(String name){
        return positionRepositoryImpl.getPositionForName(name);
    }
}
