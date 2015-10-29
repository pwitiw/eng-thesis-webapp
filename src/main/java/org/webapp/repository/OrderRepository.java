package org.webapp.repository;

import org.springframework.stereotype.Repository;
import org.webapp.models.OrderEntity;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by Patryk on 2015-10-28.
 */

@Repository("orderRepository")
public interface OrderRepository extends JpaRepository<OrderEntity, Long> {
}