while (true) {
    let temprature = prompt("Type 'C' to convert Celsius to Fahrenheit, 'F' to convert Fahrenheit to Celsius, or 'exit' to quit:");

    // Exit condition
    if (temprature === null || temprature.toLowerCase() === "exit") {
        alert("Goodbye!");
        break;
    }

    let value = Number(prompt("Enter the temperature value:"));

    let result;

    if (temprature.toUpperCase() === 'C') {
        result = (value * 9/5) + 32;
       alert(`${value}°C = ${result.toFixed(2)}°F`);
        //alert(value + " °C" + " = " + result + " °F")
        
    } else if (temprature.toUpperCase() === 'F') {
        result = (value - 32) * 5/9;
       alert(`${value}°F = ${result.toFixed(2)}°C`);
       // alert(value + " °F" + " = " + result + " °C")
    } else {
        alert("Invalid choice! Please enter 'C', 'F', or 'exit'.");
    }
}
