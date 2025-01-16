package com.example.financialsforyou;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

// defining the class as a REST controller
@RestController
public class MortgageCalculator {
    @PostMapping ("/calculate")
    public double calculateMortgage(@RequestBody MortgageRequester request) {
        double principal = request.getPrincipal();
        double interestRate = request.getInterestRate();
        int years = request.getYears();

        double monthlyInterestRate = (interestRate/100) / 12;
        int numberOfPayments = years * 12;
        // return the monthly mortgage payment
        return (principal * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));
    }
}




