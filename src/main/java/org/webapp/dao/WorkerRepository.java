package org.webapp.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import org.webapp.models.WorkerEntity;

import java.util.List;

/**
 * Created by Patryk on 2015-10-28.
 */

@Repository("workers")
public interface WorkerRepository extends JpaRepository<WorkerEntity, Long> {

    @Modifying
    @Transactional
    @Query("delete from workers w where w.code = ?1")
    void deleteWorkerForCode(short code);

    @Query
    WorkerEntity findByNameAndSurname(String name, String surname);

    @Query
    WorkerEntity findByCode(short code);

    @Modifying
    @Transactional
    @Query("update workers w set w.active = 0 where w.code = ?1")
    void inactivateWorker(short code);

    @Query
    List<WorkerEntity> findByActive(short active);
}
