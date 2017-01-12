package com.frontwit.app.controllers;

import com.frontwit.app.utils.FrontWitRestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import com.frontwit.app.services.SyncService;

import java.io.IOException;
import java.util.List;

/**
 * Created by Patryk on 09.04.2016.
 */
@FrontWitRestController
public class SyncController {

    @Autowired
    SyncService syncService;

    @RequestMapping(value = "/synchronize", method = RequestMethod.GET)
    @ResponseStatus(HttpStatus.OK)
    ResponseEntity<?> synchronize() throws IOException {
       List<String> orders = syncService.synchronize();
        return new ResponseEntity<List<String>>(orders, HttpStatus.OK);
    }

}
