package com.frontwit.app.controllers;

import com.frontwit.app.dto.PositionDto;
import com.frontwit.app.entities.Position;
import com.frontwit.app.services.PositionServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.List;

@Controller
@CrossOrigin(origins = "http://localhost:9000")
public class PositionController {

    @Autowired
    PositionServices positionServices;


    @RequestMapping(value = "/positions", method = RequestMethod.GET)
    public ResponseEntity<List<PositionDto>> getPositions() {
        List<PositionDto> positionDtos = positionServices.getPositions();
        return new ResponseEntity<List<PositionDto>>(positionDtos, HttpStatus.OK);
    }
}
