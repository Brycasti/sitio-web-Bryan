function convert() {
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    const inputUnit = document.getElementById('inputUnit').value;
    const outputUnit = document.getElementById('outputUnit').value;

    if (isNaN(inputValue)) {
        document.getElementById('result').innerText = "Introduce un valor válido.";
        return;
    }

    function toCelsius(value, unit) {
        switch (unit) {
            case 'C': return value;
            case 'F': return (value - 32) * 5 / 9;
            case 'K': return value - 273.15;
            case 'R': return (value - 491.67) * 5 / 9;
        }
    }

    function fromCelsius(value, unit) {
        switch (unit) {
            case 'C': return value;
            case 'F': return value * 9 / 5 + 32;
            case 'K': return value + 273.15;
            case 'R': return (value + 273.15) * 9 / 5;
        }
    }

    const celsiusValue = toCelsius(inputValue, inputUnit);
    
    const resultValue = fromCelsius(celsiusValue, outputUnit);

    document.getElementById('result').innerText = `Resultado: ${resultValue.toFixed(2)} ${outputUnit}`;
}
