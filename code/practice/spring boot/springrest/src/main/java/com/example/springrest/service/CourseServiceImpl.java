package com.example.springrest.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.example.springrest.entity.Courses;


@Service
public class CourseServiceImpl implements CourseService{
	
	List<Courses> list; 
	
	

	public CourseServiceImpl() {
		list = new ArrayList<>(); 
		list.add(new Courses(145, "Java Core Course", "This course contains basics of JAVA"));
		list.add(new Courses(1234, "Spring boot course", "Creating Rest API using Spring boot")); 
	}



	@Override
	public List<Courses> getCourses() {
		// TODO Auto-generated method stub
		return list;
	}



	@Override
	public Courses getCourse(long courseId) {
		// TODO Auto-generated method stub
		
		Courses c = null;
		for(Courses course:list) {
			if(course.getId() == courseId) {
				c = course; 
				break; 
			}
		}
		
		return c;
	}

}
