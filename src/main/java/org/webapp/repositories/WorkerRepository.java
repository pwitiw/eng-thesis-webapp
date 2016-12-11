package org.webapp.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.webapp.entities.Worker;

import java.util.List;

/**
 * Created by Patryk on 2015-10-28.
 */
@Repository
public interface WorkerRepository extends JpaRepository<Worker, Long> {

    @Query
    Worker findByNameAndSurname(String name, String surname);

    @Query
    Worker findById(long id);

    @Query
    List<Worker> findByActive(short active);
}
