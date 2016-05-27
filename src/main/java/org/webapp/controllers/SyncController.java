package org.webapp.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.webapp.services.SyncService;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by Patryk on 09.04.2016.
 */
@Controller
public class SyncController {

    @Autowired
    SyncService syncService;

    @RequestMapping(value = "/synchronize")
    @ResponseStatus(HttpStatus.OK)
    ResponseEntity<List<String>> synchronize() throws IOException {
       List<String> orders = syncService.synchronize();
        return new ResponseEntity<List<String>>(orders, HttpStatus.OK);
    }

}
