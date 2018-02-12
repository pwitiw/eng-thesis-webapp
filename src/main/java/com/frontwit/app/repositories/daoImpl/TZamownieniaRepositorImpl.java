package com.frontwit.app.repositories.daoImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import com.frontwit.app.repositories.TZamowieniaRepository;
import com.frontwit.app.entities.TZamowieniaEntity;

import java.util.Date;
import java.util.List;


/**
 * Created by Patryk on 09.04.2016.
 */
@Component
public class TZamownieniaRepositorImpl {

    @Autowired
    TZamowieniaRepository tZamowieniaRepository;

    public List<TZamowieniaEntity> getFromBistolDbForDateGreaterThanOrEqualsTo(Date date) {

        return tZamowieniaRepository.findByDataZamAfter(date);
        //  return tZamowieniaRepository.findAll();
    }

    public TZamowieniaEntity save(TZamowieniaEntity tZamowieniaEntity) {
        return tZamowieniaEntity;//tZamowieniaRepository.saveAndFlush(tZamowieniaEntity);
    }
    public List<TZamowieniaEntity> findByDataZamBetween(Date start, Date end){
        return tZamowieniaRepository.findByDataZamBetween(start,end);
    }

}
