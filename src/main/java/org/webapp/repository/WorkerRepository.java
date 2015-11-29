package org.webapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import org.webapp.models.WorkerEntity;

/**
 * Created by Patryk on 2015-10-28.
 */

@Repository("workers")
public interface WorkerRepository extends JpaRepository<WorkerEntity, Long> {

    @Modifying
    @Query("update workers w set w.id = ?1,w.name = ?2 ,w.surname = ?3 ,w.position = ?4   where w.code = ?5")
    void updateWorker(int id, String name, String surname, int position, short code);

    @Modifying
    @Query("delete from workers w where w.code = ?1")
    void deleteWorkerForCode(int code);

    @Query
    WorkerEntity findByNameAndSurname(String name, String surname);

    @Query
    WorkerEntity findByCode(short code);

}
