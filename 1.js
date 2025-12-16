// Задание 1
function averageIfPositive() {
    const num1 = parseFloat(prompt("Введите первое число:"));
    const num2 = parseFloat(prompt("Введите второе число:"));
    
    if (num1 > 0 && num2 > 0) {
        const average = (num1 + num2) / 2;
        console.log(`Среднее арифметическое: ${average}`);
        return average;
    } else {
        console.log("Оба числа должны быть положительными!");
        return null;
    }
}

// Для запуска:
// averageIfPositive();