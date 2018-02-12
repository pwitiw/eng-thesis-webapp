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

    public List<Order> findByPositionId(long posId);

    public List<Order> findByPositionIdAndActive(long posId, short active);

    public List<Order> findByCustomerId(long id);

    public List<Order> findByActiveAndPositionIdBetween(short active,long min,long max);

    public Order findByDbId(long id);
}
