package com.in28minutes.spring.basics.springin5steps.basic;

//import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.config.ConfigurableBeanFactory;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

@Component
@Scope(ConfigurableBeanFactory.SCOPE_PROTOTYPE)
public class BinarySearchImpl {
	
	private Logger logger = LoggerFactory.getLogger(this.getClass()); 
	
	@Autowired
	private SortAlgorithm sortAlgorithm; 

	public void setSortAlgorithm(SortAlgorithm sortAlgorithm) {
		this.sortAlgorithm = sortAlgorithm;
	}

	public int binarySearch(int[] numbers, int numberToSearchFor) {
//		BubbleSortAlgorithm bubbleSortAlgorithm = new BubbleSortAlgorithm(); 
		
		int[] sortedNumbers = sortAlgorithm.sort(numbers) ; 
		
		System.out.println(sortAlgorithm);
		return 3;  
	}
	
//	@PostConstruct
	public void postConstruct() {
		logger.info("postContruct");
	}
	
//	@PreDestroy
	public void preDestroy() {
		logger.info("preDestroy");
	}

}
