package org.webapp.repositories.daoImpl;

import org.webapp.entities.Component;
import org.webapp.repositories.ComponentRepository;

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
