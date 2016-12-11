package org.webapp.repositories.daoImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.webapp.repositories.SynchronizationRepository;
import org.webapp.entities.Synchronization;

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
        return synchronization.getSyncDate();
    }

}
