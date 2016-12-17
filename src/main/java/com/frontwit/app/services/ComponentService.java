package com.frontwit.app.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.frontwit.app.entities.Component;
import com.frontwit.app.repositories.daoImpl.ComponentRepositoryImpl;

import java.util.List;

/**
 * Created by Patryk on 14.05.2016.
 */
@Service
public class ComponentService {

    @Autowired
    ComponentRepositoryImpl componentRepositoryImpl;

    public List<Component> getComponentsForOrderId(long id){
        return componentRepositoryImpl.getComponentsForOrderId(id);
    }



}
