package com.frontwit.app.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * Created by Patryk on 03.01.2017.
 */
@ResponseStatus(value= HttpStatus.BAD_REQUEST, reason="Resource you are trying to retrieve does not exist!")
public class ResourcesNotFoundException extends Exception {
}
