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

    Worker findByNameAndSurname(String name, String surname);
//    @PreAuthorize("hasRole('ROLE_ADMIN')")
    Worker findById(long id);
    List<Worker> findByActive(short active);
    Worker findByCode(short code);

}
