package com.frontwit.app.repositories;

import com.frontwit.app.entities.TZamowieniaEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

/**
 * Created by Patryk on 09.04.2016.
 */
@Repository
public interface TZamowieniaRepository extends JpaRepository<TZamowieniaEntity, Long>{

    List<TZamowieniaEntity> findByDataZamAfter(Date dataZam);

    List<TZamowieniaEntity> findByDataZamBetween(Date dateStart,Date dateEnd);
}
