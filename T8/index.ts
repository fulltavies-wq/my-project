console.log(1)

function calculateSum(): number {
    let sum = 0;
    for (let i = 1; i <= 10; i++) {
        sum += i;
    }
    return sum;
}

function multiplicationTable5(): void {
    console.log("Таблица умножения на 5:");
    for (let i = 1; i <= 10; i++) {
        console.log(`5 × ${i} = ${5 * i}`);
    }
}

function factorial(n: number): number {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

function checkAgeAndShowTable(): void {
    const ageInput = prompt("Введите ваш возраст:");
    
    if (ageInput === null) {
        console.log("Ввод отменен");
        return;
    }
    
    const age = parseInt(ageInput);
    
    if (isNaN(age)) {
        console.log("Пожалуйста, введите число");
        return;
    }
    
    if (age < 18) {
        console.log("Доступ запрещён");
    } else {
        console.log(`Таблица умножения на ${age}:`);
        for (let i = 1; i <= 10; i++) {
            console.log(`${age} × ${i} = ${age * i}`);
        }
    }
}

console.log("1. Сумма чисел от 1 до 10:");
console.log(`Сумма = ${calculateSum()}`);
console.log();

console.log("2. Таблица умножения на 5:");
multiplicationTable5();
console.log();

console.log("3. Факториал числа 6:");
console.log(`6! = ${factorial(6)}`);
console.log();

console.log("4. Проверка возраста и таблица умножения:");
checkAgeAndShowTable();