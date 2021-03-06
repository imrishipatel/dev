package com.in28minutes.spring.basics.springin5steps;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

import com.in28minutes.spring.basics.springin5steps.basic.BinarySearchImpl;
import com.in28minutes.spring.basics.springin5steps.cdi.SomeCDIBusiness;
import com.in28minutes.spring.basics.springin5steps.cdi.SomeCdiDAO;
import com.in28minutes.spring.basics.springin5steps.scope.PersonDAO;

@SpringBootApplication
public class SpringIn5StepsScopeApplication {

	private static Logger LOG = LoggerFactory.getLogger(SpringIn5StepsScopeApplication.class);
	
	public static void main(String[] args) {
				
		ApplicationContext applicationContext = SpringApplication.run(SpringIn5StepsScopeApplication.class, args);
		
		SomeCDIBusiness business =applicationContext.getBean(SomeCDIBusiness.class); 
		SomeCdiDAO cdiDao = applicationContext.getBean(SomeCdiDAO.class); 
		PersonDAO personDao = applicationContext.getBean(PersonDAO.class); 
		
		LOG.info("{} dao --{}", business, business.getSomeCdiDAO());
	}

}
