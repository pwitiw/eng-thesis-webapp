package com.frontwit.app.validators;

import com.frontwit.app.entities.Worker;
import org.springframework.stereotype.Component;
import org.springframework.validation.Errors;
import org.springframework.validation.ValidationUtils;
import org.springframework.validation.Validator;
import com.frontwit.app.repositories.WorkerRepository;

/**
 * Created by Patryk on 2015-11-23.
 */
@Component
public class WorkerValidator implements Validator {

    WorkerRepository workerRepository;

    @Override
    public boolean supports(Class c) {
        return Worker.class.equals(c);
    }

    @Override
    public void validate(Object target, Errors errors) {
        Worker worker = (Worker) target;

        ValidationUtils.rejectIfEmptyOrWhitespace(errors, "name", "error.name", "Name is required.");
        ValidationUtils.rejectIfEmptyOrWhitespace(errors, "surname", "error.name", "Surname is required.");

        if(worker.getId() <100 || worker.getId() >999)
            errors.rejectValue("id", "incorrectValue", new Object[]{"'id'"}, "Id included in set 100-999.");

    }
}
