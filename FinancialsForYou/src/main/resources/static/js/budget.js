async function divideIncome(event) {
    event.preventDefault();

    const netIncome = parseFloat(document.getElementById('netIncome').value);

    const response = await fetch('/divide', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ netIncome })
    });

    const result = await response.json();

    document.getElementById('result1').innerHTML = `You should set aside:  <b>£${result.needs.toFixed(2)}</b>  for your bills`;
    document.getElementById('result2').innerHTML = `You should set aside:  <b>£${result.wants.toFixed(2)}</b>  for things you want`;
    document.getElementById('result3').innerHTML = `You should put:  <b>£${result.savings.toFixed(2)}</b>  into your savings`;
}