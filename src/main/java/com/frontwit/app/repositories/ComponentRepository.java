package com.frontwit.app.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.frontwit.app.entities.Component;

import java.util.List;

/**
 * Created by Patryk on 2016-03-26.
 */
@Repository
public interface ComponentRepository extends JpaRepository<Component, Long> {

    public List<Component> findByOrderId(long id);

}
