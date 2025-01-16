// handles the pension calculation when the form is submitted
async function calculatePension(event) {
    event.preventDefault();  // stops the page from reloading after form submission

    // get values from the input fields
    const currentAge = document.getElementById('currentAge').value;
    const retirementAge = document.getElementById('retirementAge').value;
    const currentSavings = document.getElementById('currentSavings').value;
    const annualContribution = document.getElementById('annualContribution').value;
    const annualReturnRate = document.getElementById('annualReturnRate').value;

    // check if any input is missing
    if (!currentAge || !retirementAge || !currentSavings || !annualContribution || !annualReturnRate) {
        alert("Please fill in all fields.");  // show alert if any input is empty
        return;
    }

    // send the input data to the backend for calculation
    const response = await fetch('/api/pension/calculate', {
        method: 'POST',  // HTTP POST request
        headers: { 'Content-Type': 'application/json' },  // set request type to JSON
        body: JSON.stringify({
            currentAge: currentAge,
            retirementAge: retirementAge,
            currentSavings: currentSavings,
            annualContribution: annualContribution,
            annualReturnRate: annualReturnRate
        })
    });

    // wait for the response and show the result
    const projectedSavings = await response.json();
    document.getElementById('result').innerText = `Projected Savings at Retirement: £${projectedSavings.toFixed(2)}`;
}
