let calculationHistory = [];

function mostrarIMC() {
    const altura = parseFloat(document.getElementById('alturaIMC').value);
    const peso = parseFloat(document.getElementById('pesoIMC').value);
    if (isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0) {
        document.getElementById('resultadoIMC').innerText = 'Por favor, ingrese valores válidos. Asegúrese de que la altura y el peso sean números positivos.';

        document.getElementById('resultadoIMC').style.display = 'block'; // Make result visible
        return; // Exit the function if input is invalid
    }
    const imc = peso / (altura * altura);
    const resultado = `Tu IMC es: ${imc.toFixed(2)}`;
    document.getElementById('resultadoIMC').innerText = resultado;
    document.getElementById('resultadoIMC').style.display = 'block';
    calculationHistory.push(resultado);
}

function mostrarFactorial() {
    const numero = parseInt(document.getElementById('numeroFactorial').value);
    if (isNaN(numero) || numero < 0) {
        document.getElementById('resultadoFactorial').innerText = 'Por favor, ingrese un número no negativo. Asegúrese de que el número sea un entero.';

        document.getElementById('resultadoFactorial').style.display = 'block'; // Make result visible
        return; // Exit the function if input is invalid
    }
    let factorial = 1;
    for (let i = 1; i <= numero; i++) {
        factorial *= i;
    }
    const resultado = `El factorial de ${numero} es: ${factorial}`;
    document.getElementById('resultadoFactorial').innerText = resultado;
    document.getElementById('resultadoFactorial').style.display = 'block';
    calculationHistory.push(resultado);
}

function mostrarConversion() {
    const dolares = parseFloat(document.getElementById('dolares').value);
    const tasaCambio = 5.25; // Example conversion rate
    if (isNaN(dolares) || dolares < 0) {
        document.getElementById('resultadoConversion').innerText = 'Por favor, ingrese un valor válido. Asegúrese de que el valor sea un número positivo.';

        document.getElementById('resultadoConversion').style.display = 'block'; // Make result visible
        return; // Exit the function if input is invalid
    }
    const reais = dolares * tasaCambio;
    const resultado = `${dolares} dólares son: ${reais.toFixed(2)} reales`;
    document.getElementById('resultadoConversion').innerText = resultado;
    document.getElementById('resultadoConversion').style.display = 'block';
    calculationHistory.push(resultado);
}

function mostrarAreaPerimetroRectangular() {
    const altura = parseFloat(document.getElementById('alturaRectangular').value);
    const anchura = parseFloat(document.getElementById('anchuraRectangular').value);
    if (isNaN(altura) || isNaN(anchura) || altura <= 0 || anchura <= 0) {
        document.getElementById('resultadoRectangular').innerText = 'Por favor, ingrese valores válidos. Asegúrese de que la altura y la anchura sean números positivos.';

        document.getElementById('resultadoRectangular').style.display = 'block'; // Make result visible
        return; // Exit the function if input is invalid
    }
    const area = altura * anchura;
    const perimetro = 2 * (altura + anchura);
    const resultado = `Área: ${area.toFixed(2)}, Perímetro: ${perimetro.toFixed(2)}`;
    document.getElementById('resultadoRectangular').innerText = resultado;
    document.getElementById('resultadoRectangular').style.display = 'block';
    calculationHistory.push(resultado);
}

function mostrarAreaPerimetroCircular() {
    const radio = parseFloat(document.getElementById('radioCircular').value);
    if (isNaN(radio) || radio <= 0) {
        document.getElementById('resultadoCircular').innerText = 'Por favor, ingrese un valor válido. Asegúrese de que el radio sea un número positivo.';

        document.getElementById('resultadoCircular').style.display = 'block'; // Make result visible
        return; // Exit the function if input is invalid
    }
    const area = Math.PI * radio * radio;
    const perimetro = 2 * Math.PI * radio;
    const resultado = `Área: ${area.toFixed(2)}, Perímetro: ${perimetro.toFixed(2)}`;
    document.getElementById('resultadoCircular').innerText = resultado;
    document.getElementById('resultadoCircular').style.display = 'block';
    calculationHistory.push(resultado);
}

function mostrarTabla() {
    const numero = parseInt(document.getElementById('numeroTabla').value);
    let tabla = '';
    if (isNaN(numero) || numero <= 0) {
        document.getElementById('resultadoTabla').innerText = 'Por favor, ingrese un número válido. Asegúrese de que el número sea positivo.';

        document.getElementById('resultadoTabla').style.display = 'block'; // Make result visible
        return; // Exit the function if input is invalid
    }
    for (let i = 1; i <= 10; i++) {
        tabla += `${numero} x ${i} = ${numero * i}<br>`;
    }
    const resultado = `Tabla de multiplicar del ${numero}:<br>${tabla}`;
    document.getElementById('resultadoTabla').innerHTML = resultado;
    document.getElementById('resultadoTabla').style.display = 'block';
    calculationHistory.push(resultado);
}

function toggleNightMode() {
    document.body.classList.toggle('night-mode');
}

function displayHistory() {
    const historyContainer = document.createElement('div');
    historyContainer.innerHTML = '<h3>Historial de Cálculos:</h3>';
    calculationHistory.forEach((calc, index) => {
        const p = document.createElement('p');
        p.innerText = `${index + 1}: ${calc}`;
        historyContainer.appendChild(p);
    });
    document.body.appendChild(historyContainer);
}

function resetQuiz() {
    // Clear all input fields
    document.querySelectorAll('.input').forEach(input => input.value = "");
    
    // Ensure all result displays are hidden
    document.querySelectorAll('p[id^="resultado"]').forEach(result => result.style.display = 'none');

    // Show the first question and alert the user
    showAlert("Welcome back! You can start answering the questions again."); // Custom alert for reset
    setTimeout(() => {
        const firstPostIt = document.querySelector('.post-it:first-of-type');
        if (firstPostIt) {
            firstPostIt.style.display = 'block';
            firstPostIt.style.transform = 'translateX(0)';
        }
    }, 10000); // Show first question after 10 seconds

    // Hide the reset button
    document.querySelector('.reset-container').style.display = 'none';
}

document.getElementById('resetButton').addEventListener('click', resetQuiz);
