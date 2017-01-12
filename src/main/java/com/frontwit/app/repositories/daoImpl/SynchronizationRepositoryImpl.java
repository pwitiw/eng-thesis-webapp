package com.frontwit.app.repositories.daoImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import com.frontwit.app.repositories.SynchronizationRepository;
import com.frontwit.app.entities.Synchronization;

import java.util.Date;

/**
 * Created by Patryk on 09.04.2016.
 */
@Component
public class SynchronizationRepositoryImpl {

    @Autowired
    SynchronizationRepository synchronizationRepository;

    public Date getLastSyncDate() {
        Synchronization synchronization = synchronizationRepository.findTopByOrderBySyncDateDesc();
        return synchronization != null ? synchronization.getSyncDate() : new Date(0L);
    }

    public Synchronization addNewSyncDate(Synchronization synchronization){
       return synchronizationRepository.save(synchronization);
    }

}
