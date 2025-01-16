package com.example.financialsforyou;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
@SpringBootApplication
public class FinancialsForYouApplication {

    @GetMapping("/") //website home page
    public String index() {
        return "index";
    }

    @GetMapping("/mortgages")
    public String mortgages() { 
    return "mortgages"; 
    }

    @GetMapping("/pensions")
    public String pensions() {
        return "pensions";
    }

    @GetMapping("/about")
    public String about() {
        return "about";
    }

    @GetMapping("/budgets")
    public String budgets() { return "budgets"; }

    @GetMapping("/quiz")
    public String quiz() { return "quiz"; }

    public static void main(String[] args) {
        SpringApplication.run(FinancialsForYouApplication.class, args);
    }

}
