package org.webapp.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.webapp.models.Component;

import java.util.List;

/**
 * Created by Patryk on 2016-03-26.
 */
@Repository("components")
public interface ComponentRepository extends JpaRepository<Component, Long> {

    public List<Component> findByOrderId(long id);

}
