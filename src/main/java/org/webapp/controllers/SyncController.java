package org.webapp.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.webapp.services.SyncService;

import java.io.IOException;

/**
 * Created by Patryk on 09.04.2016.
 */
@Controller
public class SyncController {

    @Autowired
    SyncService syncService;

    @RequestMapping(value = "/synchronize")
    void synchronize() throws IOException {
        syncService.synchronize();
    }

}
