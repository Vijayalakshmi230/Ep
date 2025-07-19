package com.examly.emp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.examly.emp.model.Employee;
import com.examly.emp.repository.EmployeeRepo;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepo repo;

    public Employee addemp(Employee employee){
        return repo.save(employee);
    }

    public List<Employee> getAllemp(){
        return repo.findAll();
    }
}
