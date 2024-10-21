function convert() {
    let temp = document.getElementById('temperature').value;
    let unit = document.getElementById('unit').value;
    let result;

    if (!temp) {
        alert("Please enter a temperature");
        return;
    }

    temp = parseFloat(temp);

    // Conversion logic
    switch (unit) {
        case "Celsius":
            result = `${temp} °C = ${(temp * 9/5 + 32).toFixed(2)} °F = ${(temp + 273.15).toFixed(2)} K`;
            break;
        case "Fahrenheit":
            result = `${temp} °F = ${((temp - 32) * 5/9).toFixed(2)} °C = ${(((temp - 32) * 5/9) + 273.15).toFixed(2)} K`;
            break;
        case "Kelvin":
            result = `${temp} K = ${(temp - 273.15).toFixed(2)} °C = ${((temp - 273.15) * 9/5 + 32).toFixed(2)} °F`;
            break;
        default:
            result = "Invalid unit";
    }

    // Display result
    document.getElementById('result').innerText = result;

    // Update the temperature icon
    updateIcon(temp, unit);

    // Add conversion to the history list
    addToHistory(result);
}

// Update the temperature icon based on the temperature
function updateIcon(temp, unit) {
    const icon = document.getElementById('icon');
    let temperature;

    // Convert the temperature to Celsius for comparison purposes
    switch (unit) {
        case "Celsius":
            temperature = temp;
            break;
        case "Fahrenheit":
            temperature = (temp - 32) * 5 / 9;
            break;
        case "Kelvin":
            temperature = temp - 273.15;
            break;
        default:
            temperature = temp;
    }

    // Change icon based on the temperature value
    if (temperature <= 10) {
        icon.innerHTML = "❄️"; // Cold icon
        icon.className = 'temp-icon cold';
    } else if (temperature > 10 && temperature <= 30) {
        icon.innerHTML = "🌤️"; // Warm icon
        icon.className = 'temp-icon warm';
    } else {
        icon.innerHTML = "🔥"; // Hot icon
        icon.className = 'temp-icon hot';
    }
}

// Update the temperature input field when the slider is adjusted
function updateSlider(value) {
    document.getElementById('sliderValue').innerText = value;
    document.getElementById('temperature').value = value;
}

// Add the conversion result to the history list
function addToHistory(result) {
    const historyList = document.getElementById('historyList');
    const historyItem = document.createElement('li');
    historyItem.innerText = result;
    historyList.appendChild(historyItem);
}

// Toggle between light and dark theme
function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-theme');
}
