package com.example.controlador;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ControladorPagina {
	
	
	@GetMapping("/")
	public String inicio() {
		
		
		
		return "pagina";
		
	}

}
