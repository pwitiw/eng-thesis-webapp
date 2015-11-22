package org.webapp.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.webapp.models.EventEntity;
import org.webapp.models.WorkerEntity;
import org.webapp.services.EventService;
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


    @Autowired
    EventService eventService;

    @RequestMapping(value = "/all", method = RequestMethod.GET)
    public String printWorkerList(Model model) {

        List<WorkerEntity> workers = workerService.getAllWorkers();
        model.addAttribute("workers", workers);

        return "workers";
    }

    @RequestMapping(value = "/edit", method = RequestMethod.GET)
     public String editWorkers(Model model) {

        List<WorkerEntity> workers = workerService.getAllWorkers();
        model.addAttribute("workers", workers);

        return "workers_edit";
    }

    @RequestMapping(value = "/statsistic", method = RequestMethod.GET)
    public String workers(Model model) {

        List<WorkerEntity> workers = workerService.getAllWorkers();
        model.addAttribute("workers", workers);

        return "workers_statistic";
    }

    @RequestMapping(value = "/statistic", method = RequestMethod.GET)
    public String workerStatistic(Model model) {

        List<EventEntity> events = eventService.getEventsForWorker(1);
       model.addAttribute("events", events);

        return "workers_statistic";
    }

}
