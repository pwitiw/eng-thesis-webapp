package org.webapp.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.webapp.models.WorkerEntity;

/**
 * Created by Patryk on 2015-10-28.
 */

@Repository("workers")
public interface WorkerRepository extends JpaRepository<WorkerEntity, Long> {

    @Modifying
    @Query("delete from workers w where w.code = ?1")
    void deleteWorkerForCode(int code);

    @Query
    WorkerEntity findByNameAndSurname(String name, String surname);

    @Query
    WorkerEntity findByCode(short code);

}
