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

    public List<TZamowieniaEntity> getFromBistolDbForDateGreaterThan(Date date) {

        return tZamowieniaRepository.findByDateAfter(date);
        //  return tZamowieniaRepository.findAll();
    }

    public TZamowieniaEntity save(TZamowieniaEntity tZamowieniaEntity) {
        return tZamowieniaRepository.saveAndFlush(tZamowieniaEntity);
    }

}
