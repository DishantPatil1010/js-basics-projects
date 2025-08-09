let num1 = Number(prompt("Entere your first number"))
let num2 = Number(prompt("Entere your second number"))

let operation = prompt("enter operation (+,-,*,/):");
let result;

if (operation === "+") {
    result = num1 + num2;
}
else if (operation === "-") {
    result = num1 - num2;
}
else if (operation === "*") {
    result = num1 * num2
}
else if (operation === "/") {
    if (num2 !== 0) {
        result = num1 / num2
    } else {
        alert("error: division by zero is not allowed ")
    }
} else {
    alert("invalid operation")
}

if (result !== undefined) {
    if (operation === "+") {
        alert("the result of addition is  " + result);
    } else if (operation === "-") {
        alert("the result of substration is  " + result);
    }
    else if (operation === "*") {
        alert("the result of multiplication is  " + result);
    }
    else if (operation === "/") {
        alert("the result of division is  " + result);
    }
}
