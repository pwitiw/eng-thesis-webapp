package com.frontwit.app.validators;

import com.frontwit.app.entities.Customer;
import org.springframework.stereotype.Service;
import org.springframework.validation.Errors;
import org.springframework.validation.ValidationUtils;
import org.springframework.validation.Validator;

/**
 * Created by Patryk on 11.01.2017.
 */
@Service
public class CustomerValidator implements Validator{
    @Override
    public boolean supports(Class<?> clazz) {
        return Customer.class.equals(clazz);
    }

    @Override
    public void validate(Object target, Errors errors) {
        ValidationUtils.rejectIfEmptyOrWhitespace(errors, "name", "error.name", "Customer name is required.");
    }
}
