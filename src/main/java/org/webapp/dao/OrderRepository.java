package org.webapp.dao;

import org.webapp.models.OrderEntity;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by Patryk on 2015-10-28.
 */
public interface OrderRepository extends JpaRepository<OrderEntity, Long> {

    OrderEntity findById(long Id);
}
