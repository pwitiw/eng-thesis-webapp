package com.frontwit.app.repositories;

import com.frontwit.app.entities.Worker;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by Patryk on 2015-10-28.
 */
@Repository
public interface WorkerRepository extends JpaRepository<Worker, Long> {

    @Query
    Worker findByNameAndSurname(String name, String surname);

//    @PreAuthorize("hasRole('ROLE_ADMIN')")
    Worker findById(long id);

    @Query
    List<Worker> findByActive(short active);
}
