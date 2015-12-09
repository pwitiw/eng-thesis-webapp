package org.webapp.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.webapp.models.EventEntity;

/**
 * Created by Patryk on 2015-11-19.
 */

@Repository("events")
public interface EventRepository extends JpaRepository<EventEntity, Long> {
}
