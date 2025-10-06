console.log(1);

function calculateSum() {
    let sum = 0;
    for (let i = 1; i <= 10; i++) {
        sum += i;
    }
    return sum;
}

function multiplicationTable5() {
    console.log("Таблица умножения на 5:");
    for (let i = 1; i <= 10; i++) {
        console.log("5 × " + i + " = " + (5 * i));
    }
}

function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

function checkAgeAndShowTable() {
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
// Работа с данными магазина
console.log("\n=== Анализ данных ===");

const items = [
  { name: "блок А", price: 3300, available: true },
  { name: "модуль Б", price: 2555, available: true },
  { name: "комплекс В", price: 1500, available: false },
  { name: "система Г", price: 2100, available: true },
  { name: "набор Д", price: 1330, available: false },
];

const availableItems = items.filter(item => item.available);
console.log("Доступные позиции:", availableItems);

const availablePrices = availableItems.map(item => item.price);
console.log("Стоимость доступных:", availablePrices);

let totalCost = 0;
for (let i = 0; i < availableItems.length; i++) {
  totalCost += availableItems[i].price;
}
console.log("Общая сумма доступных:", totalCost);

const sortedAvailableItems = [...availableItems].sort((a, b) => a.price - b.price);
console.log("Сортировка по стоимости:", sortedAvailableItems);
