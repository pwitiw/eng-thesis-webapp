package com.frontwit.app.services;

import com.frontwit.app.dto.ComponentDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.parsing.ComponentDefinition;
import org.springframework.stereotype.Service;
import com.frontwit.app.entities.Component;
import com.frontwit.app.repositories.daoImpl.ComponentRepositoryImpl;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by Patryk on 14.05.2016.
 */
@Service
public class ComponentService {

    @Autowired
    ComponentRepositoryImpl componentRepositoryImpl;

    @Transactional
    public List<ComponentDto> getComponentsForOrderId(long id) {
        List<Component> components = componentRepositoryImpl.getComponentsForOrderId(id);
        return getDtosForComponents(components);
    }

    private List<ComponentDto> getDtosForComponents(List<Component> components) {
        List<ComponentDto> componentDtos = new ArrayList<>();
        for (Component c : components) {
            componentDtos.add(ComponentDto.parseComponentDto(c));
        }
        return componentDtos;
    }

    private Component getComponentForDto(ComponentDto dto) {

        Component component = new Component();
        component.setId(dto.getId());
        component.setComment(dto.getComment());
        component.setHeight(dto.getHeight());
        component.setWidth(dto.getWidth());
        component.setAmount(dto.getAmount());
        component.setMissing(dto.getMissing());
        return component;
    }

    public List<Component> getComponentsForDtos(List<ComponentDto> dtos) {

        List<Component> components = new ArrayList<>();
        for (ComponentDto dto : dtos) {
            components.add(getComponentForDto(dto));
        }
        return components;
    }
}
