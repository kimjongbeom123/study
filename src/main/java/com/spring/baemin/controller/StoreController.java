package com.spring.baemin.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class StoreController {

	@RequestMapping("storeListForm")
	public String storeList(Model model,String comId) {
		System.out.println("응?");
		
		return "user/main2";
	}
	
}
