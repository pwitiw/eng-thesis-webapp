package com.frontwit.app.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * Created by Patryk on 05.01.2017.
 */
@ResponseStatus(value = HttpStatus.BAD_REQUEST)
public class BadOperationOnResourcesException extends Exception {
    public BadOperationOnResourcesException() {
    }

    public BadOperationOnResourcesException(String text) {
        super(text);
    }
}
