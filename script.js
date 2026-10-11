// Obtener los elementos del HTML
const inputCelsius = document.getElementById("celsius");
const btnConvertir = document.getElementById("btnConvertir");
const resultado = document.getElementById("resultado");

// Escuchar el clic del botón
btnConvertir.addEventListener("click", function () {

    // Obtener el valor ingresado
    const entrada = inputCelsius.value.trim();

    // Validar que el campo no esté vacío
    if (entrada === "") {
        resultado.textContent = "Error: debes ingresar una temperatura.";
        inputCelsius.focus();
        return;
    }

    // Convertir el texto a número
    const celsius = Number(entrada);

    // Validar que sea un número válido
    if (!Number.isFinite(celsius)) {
        resultado.textContent =
            "Error: ingresa un valor numérico válido. Inténtalo nuevamente.";

        inputCelsius.value = "";
        inputCelsius.focus();
        return;
    }

    // Convertir Celsius a Fahrenheit
    const fahrenheit = (celsius * 9 / 5) + 32;

    // Convertir Celsius a Kelvin
    const kelvin = celsius + 273.15;

    // Mostrar los resultados
    resultado.innerHTML = `
        <h2>Resultados</h2>
        <p>Grados Kelvin: ${kelvin.toFixed(2)}</p>
        <p>Grados Fahrenheit: ${Number(fahrenheit.toFixed(2))}</p>
    `;

});