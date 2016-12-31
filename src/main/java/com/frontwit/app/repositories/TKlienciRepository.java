package com.frontwit.app.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.frontwit.app.entities.TKlienciEntity;

/**
 * Created by Patryk on 09.04.2016.
 */
@Repository
public interface TKlienciRepository extends JpaRepository<TKlienciEntity, Integer> {

    public TKlienciEntity findById(int id);
}
