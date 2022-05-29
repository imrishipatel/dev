package com.example.springrest.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.example.springrest.entity.Courses;
import com.example.springrest.service.CourseService;

@RestController
public class MyController {
	
	@Autowired
	private CourseService courseService ; 
	
	@GetMapping("/health")
	public String home() {
		return "ok"; 
	}
	
	@GetMapping("/courses")
	public List<Courses> getCourses() {
		
		return this.courseService.getCourses();
	}
	
	@GetMapping("/courses/{courseId}")
	public Courses getCourse(@PathVariable String courseId) {
		return this.courseService.getCourse(Long.parseLong(courseId)); 
	}
}
