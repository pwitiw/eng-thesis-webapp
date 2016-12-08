package org.webapp.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.webapp.models.TZamowieniaEntity;

import java.util.Date;
import java.util.List;

/**
 * Created by Patryk on 09.04.2016.
 */
public interface TZamowieniaRepository extends JpaRepository<TZamowieniaEntity, Long>{

    List<TZamowieniaEntity> findByDataZamAfter(Date date);
}
