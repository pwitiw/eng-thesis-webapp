package org.webapp.validators;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;
import org.webapp.models.WorkerEntity;
import org.webapp.dao.WorkerRepository;

/**
 * Created by Patryk on 2015-11-23.
 */
@Component
public class WorkerValidator implements Validator {

    @Autowired
    WorkerRepository workerRepository;

    @Override
    public boolean supports(Class c) {
        return WorkerEntity.class.equals(c);
    }

    @Override
    public void validate(Object target, Errors errors) {
        WorkerEntity worker = (WorkerEntity) target;

        if (workerRepository.findByCode(worker.getCode()) != null) {
            errors.rejectValue("id", "Worker with id existing");
        } else if (workerRepository.findByNameAndSurname(worker.getName(), worker.getSurname()) != null) {
            errors.rejectValue("person", "This worker already exists.");
        }
    }
}
