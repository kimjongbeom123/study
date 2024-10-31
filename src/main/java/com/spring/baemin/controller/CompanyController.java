package com.spring.baemin.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.spring.baemin.service.ComService;

@Controller
public class CompanyController {

	private static final Logger logger = LoggerFactory.getLogger(CompanyController.class);

	@Autowired
	private ComService comService;
	
	@RequestMapping("companyLoginForm")
	public String userLoginForm() {
		System.out.println(comService.comPassCheck());

		return "user/main";
	}

}
