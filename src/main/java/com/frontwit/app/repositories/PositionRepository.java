package com.frontwit.app.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.frontwit.app.entities.Position;

import java.util.List;

/**
 * Created by Patryk on 11.12.2016.
 */
@Repository
public interface PositionRepository extends JpaRepository<Position, Long> {

    List<Position> findAll();

}
