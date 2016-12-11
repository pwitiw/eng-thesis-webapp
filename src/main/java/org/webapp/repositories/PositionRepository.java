package org.webapp.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.webapp.entities.Event;
import org.webapp.entities.Position;

import java.util.List;

/**
 * Created by Patryk on 11.12.2016.
 */
@Repository
public interface PositionRepository extends JpaRepository<Position, Long> {

    List<Position> findAll();

}
