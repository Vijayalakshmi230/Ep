package com.examly.emp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.examly.emp.model.Employee;

import org.springframework.web.bind.annotation.GetMapping;

import com.examly.emp.service.EmployeeService;

@RestController
@RequestMapping("/api")
public class ApiController {

    @Autowired
    private EmployeeService service;

    @PostMapping("/post")
    public Employee addemp(@RequestBody Employee employee){        
        return service.addemp(employee);
    }

    @GetMapping("/get")
    public List<Employee> getAllemp() {
        return service.getAllemp();
    }
    
    



}
