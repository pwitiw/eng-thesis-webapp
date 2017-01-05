package com.frontwit.app.validators;

import com.frontwit.app.dto.OrderComponentDto;
import com.frontwit.app.dto.OrderDto;
import org.springframework.stereotype.Service;
import org.springframework.validation.Errors;
import org.springframework.validation.ValidationUtils;
import org.springframework.validation.Validator;
import com.frontwit.app.entities.Order;

/**
 * Created by Patryk on 2016-01-11.
 */
@Service
public class OrderValidator implements Validator {

    @Override
    public boolean supports(Class<?> aClass) {
        return OrderComponentDto.class.equals(aClass);
    }

    @Override
    public void validate(Object target, Errors errors) {
        ValidationUtils.rejectIfEmptyOrWhitespace(errors, "name", "error.name", "Order name is required.");
        ValidationUtils.rejectIfEmpty(errors, "customer", "error.customer", "Customer is required.");
        validateComponentsCount(target,errors);
        validateExpressRange(target, errors);
        validateActiveRange(target, errors);
    }

    private void validateComponentsCount(Object target,Errors errors){
        if(((OrderComponentDto)target).getComponents().size()== 0)
            errors.rejectValue("components","error.components", "At least one component is required.");
    }

    private void validateExpressRange(Object target, Errors errors) {

        if ((((OrderComponentDto) target).getExpress() != 0) && (((OrderComponentDto) target).getExpress() != 1))
            errors.rejectValue("express", "error.express", "Zła wartość pola.");
    }

    private void validateActiveRange(Object target, Errors errors) {

        if ((((OrderComponentDto) target).getActive() != 0) && (((OrderComponentDto) target).getActive() != 1))
            errors.rejectValue("active", "error.active", "Zła wartość pola.");
    }

        /*
        if (eventService.getEventsForOrder(order).size() > 0)
            return;
        if (newOrder.getName().trim().equals(""))
            return;
        //   if (((Integer) newOrder.getCustomerId()).toString().trim().equals(""))
        //     return;
        if (newOrder.getExpress() < 0 || newOrder.getExpress() > 1)
            return;*/
}
