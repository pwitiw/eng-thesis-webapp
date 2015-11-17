package org.webapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.webapp.models.WorkerEntity;

/**
 * Created by Patryk on 2015-10-28.
 */

@Repository("workers")
public interface WorkerRepository extends JpaRepository<WorkerEntity, Long> {
}
