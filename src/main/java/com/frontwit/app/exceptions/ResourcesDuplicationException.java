package com.frontwit.app.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * Created by Patryk on 03.01.2017.
 */
@ResponseStatus(value= HttpStatus.BAD_REQUEST, reason="Given resources already exists!")
public class ResourcesDuplicationException extends Exception{
}
