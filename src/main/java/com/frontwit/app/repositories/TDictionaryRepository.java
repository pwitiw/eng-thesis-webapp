package com.frontwit.app.repositories;

import com.frontwit.app.entities.TDictionaryEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by Patryk on 01.04.2017.
 */
@Repository
public interface TDictionaryRepository extends JpaRepository<TDictionaryEntity, Long> {

}
