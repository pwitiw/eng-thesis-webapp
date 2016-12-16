package com.frontwit.app.repositories.daoImpl;

import com.frontwit.app.repositories.ComponentRepository;
import com.frontwit.app.entities.Component;

import java.util.List;

/**
 * Created by Patryk on 09.04.2016.
 */
@org.springframework.stereotype.Component
public class ComponentRepositoryImpl {

    ComponentRepository componentRepository;

    public Iterable<Component> addComponentToDb(Iterable<Component> components) {
        return componentRepository.save(components);
    }

    public List<Component> getComponentsForOrderId(Long id) {
        return componentRepository.findByOrderId(id);
    }

}
