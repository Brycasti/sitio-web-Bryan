function calcularIMC() {
    const peso = parseFloat(document.getElementById('peso').value);
    const estatura = parseFloat(document.getElementById('estatura').value);

    if (isNaN(peso) || isNaN(estatura) || estatura === 0) {
        alert('Por favor, introduce valores válidos');
        return;
    }

    const imc = peso / (estatura * estatura);
    let resultado = '';
    let color = '';

    if (imc < 18.5) {
        resultado = 'Bajo Peso';
        color = 'blue';
    } else if (imc < 24.9) {
        resultado = 'Normal';
        color = 'green';
    } else if (imc < 29.9) {
        resultado = 'Sobrepeso';
        color = 'yellow';
    } else if (imc < 34.9) {
        resultado = 'Obesidad I';
        color = 'orange';
    } else if (imc < 39.9) {
        resultado = 'Obesidad II';
        color = 'darkorange';
    } else {
        resultado = 'Obesidad III';
        color = 'red';
    }

    document.getElementById('resultado').innerText = `IMC: ${imc.toFixed(2)} - ${resultado}`;
    document.getElementById('resultado').style.backgroundColor = color;
}