package org.webapp.repositories.daoImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.webapp.repositories.TKlienciRepository;

/**
 * Created by Patryk on 09.04.2016.
 */
@Component
public class TKlienciRepositoryImpl {

    @Autowired
    TKlienciRepository tKlienciRepository;

   public String getClientName(int id){
       return tKlienciRepository.findById(id).getNazwa();
   }

}

