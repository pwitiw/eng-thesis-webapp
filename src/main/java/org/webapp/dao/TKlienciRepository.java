package org.webapp.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.webapp.models.TKlienciEntity;

/**
 * Created by Patryk on 09.04.2016.
 */
@Repository
public interface TKlienciRepository extends JpaRepository<TKlienciEntity, Integer> {

    public TKlienciEntity findById(int id);
}
