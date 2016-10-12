package org.webapp.services;

import au.com.bytecode.opencsv.CSVReader;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import org.webapp.dao.daoImpl.*;
import org.webapp.models.Component;
import org.webapp.models.OrderEntity;
import org.webapp.models.TZamowieniaEntity;
import org.webapp.utils.ComponentHelper;
import org.webapp.utils.Consts;
import org.webapp.utils.OrderHelper;

import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 * Created by Patryk on 09.04.2016.
 */
@Service
public class SyncService {

    @Autowired
    TZamownieniaRepositorDAO tZamownieniaRepositorDAO;
    @Autowired
    TKlienciRepositoryDAO tKlienciRepositoryDAO;
    @Autowired
    SynchronizationRepositoryDAO synchronizationRepositoryDAO;
    @Autowired
    OrderRepositoryDAO orderRepositoryDAO;
    @Autowired
    ComponentRepositoryDAO componentRepositoryDAO;


    public List<String> synchronize() {

        Date lastSyncDate = synchronizationRepositoryDAO.getLastSyncDate();
       // List<TZamowieniaEntity> zams = new ArrayList<TZamowieniaEntity>();
        List<TZamowieniaEntity> zams = tZamownieniaRepositorDAO.getFromBistolDbForDateGreaterThan(lastSyncDate);

        String data = "4~90~290~2~~~90~600~2~~~90~290~2~BEZ FREZU~~90~385~2~BEZ FREZU~";
        String data2 = "3~713~156~1~~~430~628~1~~~283~896~1~~";
        String empty = "1~~~~~";
        OrderEntity order;

        for (TZamowieniaEntity zam : zams) {

            List<Component> components = ComponentHelper.parseComponents(zam.getPozycje());
            String clientName = tKlienciRepositoryDAO.getClientName(zam.getTklienci_id());
            order = OrderHelper.assembleInstanceOfOrder(zam, components.size(), clientName);

            componentRepositoryDAO.addComponentToDb(components);
            orderRepositoryDAO.addOrderToDb(order);
        }
        return new ArrayList<String>();
    }

//    public List<String> synchronize() throws IOException {
//        File folder = new File(Consts.SYNC_FOLDER_PATH);
//        List<String> result = new ArrayList<String>();
//        for (final File fileEntry : folder.listFiles()) {
//            if (isCSVFile(fileEntry)) {
//                String path = Consts.SYNC_FOLDER_PATH + "/" + fileEntry.getName();
//                List<Component> components = getComponentsForCSVForPath(path);
//                result.add(getOrderId(fileEntry.getName()));
//            } else {
//                continue;
//            }
//        }
//        return result;
//    }

    private List<Component> getComponentsForCSVForPath(final String filePath) throws IOException {
        List<Component> components = new ArrayList();
        CSVReader csvReader = new CSVReader(new FileReader(filePath), Consts.SEPARATOR);
        String[] nextLine;

        while ((nextLine = csvReader.readNext()) != null) {

            components.add(new Component(nextLine));
        }
        csvReader.close();
        // closeAndDeleteFile(filePath);

        return components;
    }

    private boolean closeAndDeleteFile(String path) {
        File file = new File(path);
        try {
            file.createNewFile();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return file.delete();
    }

    private String getOrderId(String file) {
        return file.split("\\.")[0];
    }

    private boolean isCSVFile(final File fileEntry) {
        return fileEntry.getName().split("\\.")[1].equals("csv");
    }


}

