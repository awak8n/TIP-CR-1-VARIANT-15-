// Задание 3
function sumOfSquares() {
    const size = parseInt(prompt("Введите размер массива:"));
    
    if (isNaN(size) || size <= 0) {
        console.log("Некорректный размер массива!");
        return;
    }
    
    const array = [];
    let sum = 0;
    
    for (let i = 0; i < size; i++) {
        const num = parseFloat(prompt(`Введите элемент ${i + 1}:`));
        if (!isNaN(num)) {
            array.push(num);
            sum += num * num;
        } else {
            array.push(0);
        }
    }
    
    console.log(`Массив: [${array}]`);
    console.log(`Сумма квадратов элементов: ${sum}`);
    
    return sum;
}

// Для запуска:
// sumOfSquares();