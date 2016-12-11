package org.webapp.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.webapp.entities.TZamowieniaEntity;

import java.util.Date;
import java.util.List;

/**
 * Created by Patryk on 09.04.2016.
 */
@Repository
public interface TZamowieniaRepository extends JpaRepository<TZamowieniaEntity, Long>{

    List<TZamowieniaEntity> findByDataZamAfter(Date date);
}
