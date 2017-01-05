package com.frontwit.app.validators;

import com.frontwit.app.dto.WorkerDto;
import com.frontwit.app.services.WorkerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.validation.Errors;
import org.springframework.validation.ValidationUtils;
import org.springframework.validation.Validator;

/**
 * Created by Patryk on 2015-11-23.
 */
@Service
public class WorkerValidator implements Validator {


    WorkerService workerService;

    @Override
    public boolean supports(Class c) {
        return WorkerDto.class.equals(c);
    }

    @Override
    public void validate(Object target, Errors errors) {

        ValidationUtils.rejectIfEmptyOrWhitespace(errors, "name", "error.name", "Imie jest wymagana.");
        ValidationUtils.rejectIfEmptyOrWhitespace(errors, "surname", "error.surname", "Nazwisko jest wymagane.");
        validateCodeValueRange(target, errors);
    }

    @Autowired
    public void setWorkerService(WorkerService workerService) {
        this.workerService = workerService;
    }

    private void validateCodeValueRange(Object target, Errors errors) {
        if (((WorkerDto) target).getCode() < 100 || ((WorkerDto) target).getCode() > 999)
            errors.rejectValue("code", "incorrectCode", new Object[]{"'code'"}, "Kod powinien byc 3-cyfrowy.");
    }
}
