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

    @GetMapping("/mortgages") //mortgages page
    public String mortgages() { 
    return "mortgages"; 
    }



    @GetMapping("/pensions") //pensions page
    public String pensions() {
        return "pensions";
    }

    @GetMapping("/about") //about page
    public String about() {
        return "about";
    }

    @GetMapping("/investments") //investments page
    public String investments() {
        return "investments";
    }


    @GetMapping("/budgets") //budgets page
    public String budgets() { return "budgets"; }

    public static void main(String[] args) {
        SpringApplication.run(FinancialsForYouApplication.class, args);
    }

}
