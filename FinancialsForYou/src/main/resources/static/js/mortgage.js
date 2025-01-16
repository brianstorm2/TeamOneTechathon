async function calculateMortgage(event) {
    // prevent default form submission
    event.preventDefault();

    const principal = document.getElementById('principal').value;
    const interestRate = document.getElementById('interestRate').value;
    const years = document.getElementById('years').value;

    const response = await fetch('/calculate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ principal, interestRate, years })
    });
    // results section
    const monthlyPayment = await response.json();
    //update HTML to reflect results
    document.getElementById('result').innerText = `Your Monthly Payment will be £${monthlyPayment.toFixed(2)}`;
}
