package com.examly.emp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.examly.emp.model.Employee;

public interface EmployeeRepo extends JpaRepository<Employee, Integer>{

}
