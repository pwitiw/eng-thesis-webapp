package com.frontwit.app.validators;

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
        return OrderDto.class.equals(aClass);
    }

    @Override
    public void validate(Object o, Errors errors) {
        ValidationUtils.rejectIfEmptyOrWhitespace(errors, "name", "error.name", "Order name is required.");
        ValidationUtils.rejectIfEmpty(errors, "customer", "error.customer", "Customer is required.");
        ValidationUtils.rejectIfEmpty(errors, "components", "error.name", "At least one component is required.");
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
