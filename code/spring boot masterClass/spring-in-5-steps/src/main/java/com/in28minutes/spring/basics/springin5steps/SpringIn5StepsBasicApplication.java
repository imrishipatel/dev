package com.in28minutes.spring.basics.springin5steps;

//import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

import com.in28minutes.spring.basics.springin5steps.basic.BinarySearchImpl;

@Configuration
@ComponentScan
public class SpringIn5StepsBasicApplication {

	public static void main(String[] args) {
		
//		BinarySearchImpl binarySearch = new BinarySearchImpl(new QuickSortAlgorithm()); 
		
		try(AnnotationConfigApplicationContext applicationContext = new AnnotationConfigApplicationContext(SpringIn5StepsBasicApplication.class)) {
			BinarySearchImpl binarySearch = applicationContext.getBean(BinarySearchImpl.class); 
			BinarySearchImpl binarySearch1 = applicationContext.getBean(BinarySearchImpl.class); 
			
			
			System.out.println(binarySearch1);
			System.out.println(binarySearch);
			
			int result = binarySearch.binarySearch(new int[] {12,4,6}, 3);
			System.out.println(result);
			applicationContext.close();
		}
		
	}

}
