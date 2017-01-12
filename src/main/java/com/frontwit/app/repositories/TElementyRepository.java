package com.frontwit.app.repositories;

import com.frontwit.app.entities.TElementyEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


/**
 * Created by Patryk on 09.04.2016.
 */
@Repository
public interface TElementyRepository extends JpaRepository<TElementyEntity, Long> {

    public List<TElementyEntity> findByOrderId(long id);

    
    public List<TElementyEntity> findAll();
}
