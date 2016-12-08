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
public interface WorkerRepository extends JpaRepository<WorkerEntity, Long> {

    @Query
    WorkerEntity findByNameAndSurname(String name, String surname);

    @Query
    WorkerEntity findById(long id);

    @Query
    List<WorkerEntity> findByActive(short active);
}
