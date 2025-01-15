package com.example.financialsforyou;

import org.springframework.stereotype.Service;

// handles the pension calculation logic
@Service
public class PensionService {

    // calculates the projected pension savings
    public double calculatePension(PensionRequest request) {
        // calculate the number of years until retirement
        int yearsToGrow = request.getRetirementAge() - request.getCurrentAge();

        // starting savings amount
        double totalSavings = request.getCurrentSavings();

        // convert annual return rate from percent to decimal
        double annualRate = request.getAnnualReturnRate() / 100;

        // calculate compound interest for each year
        for (int i = 0; i < yearsToGrow; i++) {
            totalSavings = (totalSavings + request.getAnnualContribution()) * (1 + annualRate);
        }

        // round the result to 2 decimal places
        return Math.round(totalSavings * 100.0) / 100.0;
    }
}
