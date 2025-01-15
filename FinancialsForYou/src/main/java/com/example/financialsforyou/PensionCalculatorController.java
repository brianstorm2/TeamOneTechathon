package com.example.financialsforyou;

import org.springframework.web.bind.annotation.*;

// pension calculator controller
//connects the frontend form to the backend calculation

@RestController
@RequestMapping("/api/pension")
@CrossOrigin(origins = "*")  // allows the frontend to access this backend
public class PensionCalculatorController {

    // uses the pension service to do the calculation
    private final PensionService pensionService;

    //sets up the pension service so it can be used here

    public PensionCalculatorController(PensionService pensionService) {
        this.pensionService = pensionService;
    }

    //calculates the pension when the user submits the form
     //gets the user’s input and sends back the result

    @PostMapping("/calculate")
    public double calculatePension(@RequestBody PensionRequest request) {
        // runs the pension calculation
        return pensionService.calculatePension(request);
    }
}
