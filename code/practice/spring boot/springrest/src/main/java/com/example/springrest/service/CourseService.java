package com.example.springrest.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.springrest.entity.Courses;

@Service
public interface CourseService {
	
	 public List<Courses> getCourses();
	 
	 public Courses getCourse(long courseId); 
	
}
