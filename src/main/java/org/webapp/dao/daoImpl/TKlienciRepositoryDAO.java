package org.webapp.dao.daoImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.webapp.dao.TKlienciRepository;

/**
 * Created by Patryk on 09.04.2016.
 */
@Repository
public class TKlienciRepositoryDAO {

    @Autowired
    TKlienciRepository tKlienciRepository;

   public String getClientName(int id){
       return tKlienciRepository.findById(id).getNazwa();
   }

}

