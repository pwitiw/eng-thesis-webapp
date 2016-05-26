package org.webapp.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.webapp.models.SynchronizationEntity;

/**
 * Created by Patryk on 09.04.2016.
 */
@Repository
public interface SynchronizationRepository extends JpaRepository<SynchronizationEntity, Long> {

    SynchronizationEntity findTopByOrderBySyncDateDesc();

}
