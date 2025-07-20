package com.examly.yoga_backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.examly.yoga_backend.exception.InvalidCertificationException;
import com.examly.yoga_backend.model.Instructor;
import com.examly.yoga_backend.repository.InstructorRepo;

@Service
public class InstructorService {

    @Autowired
    private InstructorRepo repo;

    public Instructor addInstructor(Instructor instructor){
        if (instructor.getCertification() == null || instructor.getCertification().trim().isEmpty()) {
            throw new InvalidCertificationException("Certification cannot be empty.");
        }
        return repo.save(instructor);
    }

    public List<Instructor> getAllInstructor(){
        return repo.findAll();
    }


}
