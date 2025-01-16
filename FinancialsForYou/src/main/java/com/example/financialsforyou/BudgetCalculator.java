package com.example.financialsforyou;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import java.util.HashMap;
import java.util.Map;

@RestController
public class BudgetCalculator {

    @PostMapping("/divide")
    public Map<String, Double> divideIncome(@RequestBody BudgetRequester request) {
        double netIncome = request.getNetIncome();
        // map for storing the budgets
        Map<String, Double> result = new HashMap<>();
        result.put("needs", netIncome * 0.50);
        result.put("wants", netIncome * 0.30);
        result.put("savings", netIncome * 0.20);

        return result;
    }
}
