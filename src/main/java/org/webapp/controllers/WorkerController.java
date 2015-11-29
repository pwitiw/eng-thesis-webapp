package org.webapp.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.support.SessionStatus;
import org.webapp.models.EventEntity;
import org.webapp.models.WorkerEntity;
import org.webapp.services.EventService;
import org.webapp.services.WorkerService;
import org.webapp.validators.WorkerValidator;

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

    @Autowired
    WorkerValidator workerValidator;

    @RequestMapping(value = "/all", method = RequestMethod.GET)
    public String printWorkerList(Model model) {

        List<WorkerEntity> workers = workerService.getAllWorkers();
        model.addAttribute("workers", workers);

        return "workers";
    }

    @RequestMapping(value = "/statistic", method = RequestMethod.GET)
    public String workerStatistic(Model model) {

        List<EventEntity> events = eventService.getEventsForWorker(1);
        model.addAttribute("events", events);

        return "workers_statistic";
    }

    @RequestMapping(value = "/new", method = RequestMethod.GET)
    public String addNewWorker(Model model) {

        return "new_worker";
    }

    @RequestMapping(value = "/add", method = RequestMethod.POST)
    public String addNewWorkerButtonClicked(@ModelAttribute("worker") WorkerEntity newWorker, BindingResult result, SessionStatus status) {

     /*   workerValidator.validate(newWorker, result);

        if (result.hasErrors())
            return "/workers/new";

        status.setComplete();*/
        workerService.add(newWorker);
        return "redirect:/workers/all";
    }

    @RequestMapping(value = "/delete", method = RequestMethod.POST)
    public String deleteWorker(@ModelAttribute("code") short code, BindingResult result, SessionStatus status) {

        workerService.delete(code);
        return "redirect:/workers/all";
    }

    @RequestMapping(value = "/edit", method = RequestMethod.GET)
    public String editWorkerButton(@ModelAttribute("code") short code,
                                   Model model, BindingResult result, SessionStatus status) {

        WorkerEntity worker = workerService.getWorker(code);

        model.addAttribute("worker", worker);
        return "edit_worker";
    }

    @RequestMapping(value = "/addChanges", method = RequestMethod.POST)
    public String edi(@ModelAttribute("worker") WorkerEntity worker, BindingResult result, SessionStatus status) {
        workerService.addChangesIfExists(worker);
        return "redirect:/workers/all";
    }

}