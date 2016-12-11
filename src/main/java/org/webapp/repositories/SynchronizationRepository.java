package org.webapp.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.webapp.entities.Synchronization;

/**
 * Created by Patryk on 09.04.2016.
 */
@Repository
public interface SynchronizationRepository extends JpaRepository<Synchronization, Long> {

    Synchronization findTopByOrderBySyncDateDesc();

}
