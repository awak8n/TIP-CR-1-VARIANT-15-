// Задание 4
function countStringsLongerThanThree(stringsArray) {
    if (!Array.isArray(stringsArray) || stringsArray.length !== 5) {
        console.log("Функция принимает массив из 5 строк!");
        return 0;
    }
    
    let count = 0;
    
    for (let i = 0; i < stringsArray.length; i++) {
        if (typeof stringsArray[i] === 'string' && stringsArray[i].length > 3) {
            count++;
        }
    }
    
    return count;
}

// Пример:
// const strings = ["hi", "hello", "test", "a", "javascript"];
// console.log(countStringsLongerThanThree(strings)); // Выведет 3 ("hello", "test", "javascript")