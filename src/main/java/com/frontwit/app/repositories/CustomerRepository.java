package com.frontwit.app.repositories;

import com.frontwit.app.entities.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

/**
 * Created by Patryk on 16.12.2016.
 */
public interface CustomerRepository extends JpaRepository<Customer, Long> {

    List<Customer> findByActive(short active);

    Customer findByName(String name);

}
