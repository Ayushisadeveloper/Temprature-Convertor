document.addEventListener("DOMContentLoaded", function () {
    // Function to convert Fahrenheit to Celsius
    function fahrenheitToCelsius(fahrenheit) {
        return (fahrenheit - 32) * 5 / 9;
    }

    // Function to convert Celsius to Fahrenheit
    function celsiusToFahrenheit(celsius) {
        return (celsius * 9 / 5) + 32;
    }

    // Get elements from the DOM
    const inputField = document.getElementById('insert');
    const displayField = document.getElementById('display');
    const ftocButton = document.getElementById('ftoc');
    const ctofButton = document.getElementById('ctof');
    const clearButton = document.getElementById('clear');

    // Add event listener for the Fahrenheit to Celsius button
    ftocButton.addEventListener('click', function () {
        const tempF = parseFloat(inputField.value);
        if (!isNaN(tempF)) {
            const tempC = fahrenheitToCelsius(tempF);
            displayField.value = `${tempC.toFixed(2)} ℃`;
        } else {
            displayField.value = "Please enter a valid number";
        }
    });

    // Add event listener for the Celsius to Fahrenheit button
    ctofButton.addEventListener('click', function () {
        const tempC = parseFloat(inputField.value);
        if (!isNaN(tempC)) {
            const tempF = celsiusToFahrenheit(tempC);
            displayField.value = `${tempF.toFixed(2)} ℉`;
        } else {
            displayField.value = "Please enter a valid number";
        }
    });

    // Add event listener for the clear button
    clearButton.addEventListener('click', function () {
        inputField.value = "";
        displayField.value = "";
    });
});
