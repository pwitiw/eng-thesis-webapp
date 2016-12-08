package org.webapp.dao.daoImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.webapp.dao.SynchronizationRepository;
import org.webapp.models.SynchronizationEntity;

import java.util.Date;

/**
 * Created by Patryk on 09.04.2016.
 */
@Repository
public class SynchronizationRepositoryDAO {

    SynchronizationRepository synchronizationRepository;

    public Date getLastSyncDate() {
        SynchronizationEntity synchronizationEntity = synchronizationRepository.findTopByOrderBySyncDateDesc();
        return synchronizationEntity.getSyncDate();
    }

}
