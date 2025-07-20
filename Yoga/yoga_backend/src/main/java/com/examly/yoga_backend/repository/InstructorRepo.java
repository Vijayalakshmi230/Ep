package com.examly.yoga_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.examly.yoga_backend.model.Instructor;

public interface InstructorRepo extends JpaRepository<Instructor, Integer> {

}
