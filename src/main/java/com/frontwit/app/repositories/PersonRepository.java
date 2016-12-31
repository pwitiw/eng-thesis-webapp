package com.frontwit.app.repositories;

import com.frontwit.app.entities.Person;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by Patryk on 22.12.2016.
 */
@Repository
public interface PersonRepository extends JpaRepository <Person, Long> {
}
