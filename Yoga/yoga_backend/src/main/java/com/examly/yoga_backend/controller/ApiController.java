package com.examly.yoga_backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.examly.yoga_backend.exception.InvalidCertificationException;
import com.examly.yoga_backend.model.Instructor;
import com.examly.yoga_backend.service.InstructorService;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
@RequestMapping("/api")
public class ApiController {

    @Autowired
    private InstructorService service;

    // @PostMapping("/post")
    // public Instructor addInstructor(@RequestBody Instructor instructor) {
        
    //     return service.addInstructor(instructor);
    // }

    @PostMapping("/post")
    public ResponseEntity<?> addInstructor(@RequestBody Instructor instructor){
        try{
            Instructor savedInstructor = service.addInstructor(instructor);
            return ResponseEntity.ok(savedInstructor);
        }
        catch(InvalidCertificationException ex){
            return handleInvalidCertificationException(ex);
        }
    }
    

    @GetMapping("/getAll")
    public List<Instructor> getAllInstructor() {
        return service.getAllInstructor();
    }
    
    @ExceptionHandler(InvalidCertificationException.class)
    public ResponseEntity<String> handleInvalidCertificationException(InvalidCertificationException ex){
        return new ResponseEntity<>("Certifictaion cannot be empty.",HttpStatus.BAD_REQUEST);
    }
    

}
