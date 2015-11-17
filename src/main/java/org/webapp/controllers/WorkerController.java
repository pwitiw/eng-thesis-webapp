package org.webapp.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.webapp.models.WorkerEntity;
import org.webapp.services.WorkerService;

import java.util.List;

/**
 * Created by Patryk on 2015-11-02.
 */
@Controller
@RequestMapping("/workers")
public class WorkerController {

    @Autowired
    WorkerService workerService;

    @RequestMapping(value = "/statistics", method = RequestMethod.GET)
    public String printWorkerList(Model model) {

        List<WorkerEntity> workers = workerService.getAllWorkers();
        model.addAttribute("workers", workers);

        return "workers";

    }
}
