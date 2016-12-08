package org.webapp.dao.daoImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.webapp.dao.ComponentRepository;
import org.webapp.models.Component;

import java.util.List;

/**
 * Created by Patryk on 09.04.2016.
 */
@Repository("components")
public class ComponentRepositoryDAO {

    ComponentRepository componentRepository;

    public Iterable<Component> addComponentToDb(Iterable<Component> components) {
        return componentRepository.save(components);
    }

    public List<Component> getComponentsForOrderId(Long id) {
        return componentRepository.findByOrderId(id);
    }

}
