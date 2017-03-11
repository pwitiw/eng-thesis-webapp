package com.frontwit.app.repositories.daoImpl;

import com.frontwit.app.entities.TKlienciEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import com.frontwit.app.repositories.TKlienciRepository;

/**
 * Created by Patryk on 09.04.2016.
 */
@Component
public class TKlienciRepositoryImpl {

    @Autowired
    TKlienciRepository tKlienciRepository;

    public String getClientName(int id) {
        return tKlienciRepository.findById(id).getNazwa();
    }

    public TKlienciEntity getCustomerForId(int id) {
        return tKlienciRepository.findById(id);
    }

}

