package org.webapp.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.webapp.entities.Event;

import java.util.List;

/**
 * Created by Patryk on 2015-11-19.
 */
@Repository
public interface EventRepository extends JpaRepository<Event, Long>  {

    @Query
    List<Event> findByWorkerId(long id);

    Event findByPrimOrderIdAndPrimPositionId(long orderId, long positionId);

    List<Event> findByPrimOrderId(long orderId);
}
