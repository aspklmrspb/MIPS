package com.mips.api.MIPS_JAVA_API.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {

	@GetMapping("/testService")
	public String TestRest() {
		return "Test REST call Successfull";
	}
}
