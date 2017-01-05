package com.frontwit.app.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * Created by Patryk on 05.01.2017.
 */
@ResponseStatus(value= HttpStatus.BAD_REQUEST, reason="Operation on resources can not be executed!")
public class BadOperationOnResourcesException extends Exception {
}
