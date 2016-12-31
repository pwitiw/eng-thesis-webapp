package com.frontwit.app.repositories;

import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.frontwit.app.entities.Order;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

/**
 * Created by Patryk on 2015-10-28.
 */
@Repository
public interface OrderRepository extends JpaRepository<Order, Long> {

    @Query
    public Order findById(long id);

    public List<Order> findByPositionId(int positionId);
}
