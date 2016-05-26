package org.webapp.dao;

import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.webapp.models.OrderEntity;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by Patryk on 2015-10-28.
 */
@Repository("orders")
public interface OrderRepository extends JpaRepository<OrderEntity, Long> {

    @Query
    public OrderEntity findById(long id);
}
