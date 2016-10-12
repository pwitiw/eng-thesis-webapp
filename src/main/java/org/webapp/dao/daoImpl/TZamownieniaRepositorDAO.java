package org.webapp.dao.daoImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import org.webapp.dao.TZamowieniaRepository;
import org.webapp.models.TZamowieniaEntity;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;


/**
 * Created by Patryk on 09.04.2016.
 */

@Repository
public class TZamownieniaRepositorDAO {

    @Autowired
    TZamowieniaRepository tZamowieniaRepository;

    public List<TZamowieniaEntity> getFromBistolDbForDateGreaterThan(Date date){

       //return tZamowieniaRepository.findByDataZamAfter(date);
        return tZamowieniaRepository.findAll();
    }

}
