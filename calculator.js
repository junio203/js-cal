class Calculator {
    static add(num1, num2) {
        return num1 + num2;
    }

    static subtract(num1, num2) {
        return num1 - num2;
    }

    static multiply(num1, num2) {
        return num1 * num2;
    }

    static divide(num1, num2) {
        if (num2 === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        return num1 / num2;
    }
}

function calculate() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operation = document.getElementById("operation").value;
    const resultElement = document.getElementById("result");

    try {
        let result;
        switch (operation) {
            case "add":
                result = Calculator.add(num1, num2);
                break;
            case "subtract":
                result = Calculator.subtract(num1, num2);
                break;
            case "multiply":
                result = Calculator.multiply(num1, num2);
                break;
            case "divide":
                result = Calculator.divide(num1, num2);
                break;
            default:
                throw new Error("Invalid operation selected.");
        }

        resultElement.textContent = `Result: ${result}`;
    } catch (error) {
        resultElement.textContent = `Error: ${error.message}`;
    } finally {
        // Any cleanup or additional actions can be performed here
    }
}
    