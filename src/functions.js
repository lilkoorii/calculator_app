export function addToResult(value) {
    let result = document.getElementById("result").textContent

    if (result === '0') {
        result = value;
    } else {
        result += value;
    }

    document.getElementById("result").textContent = result;
}
export function clearDisplay() {
    document.getElementById("result").textContent = ""
}
export function changeSign() {
    calculateResult()
    let result = document.getElementById("result").textContent;

    if (result.startsWith("-")) {
        result = result.substring(1, result.length);
    } else {
        result = "-" + result;
    }

    document.getElementById("result").textContent = result;
}
export function calculateResult() {
    const result = document.getElementById("result").textContent;

    // массив чисел
    const numbers = result.split(/[-+×/%]/).map(Number);

    // проверяем успешно ли запарсились числа
    if (numbers.some(isNaN)) {
        document.getElementById("result").textContent = 'Ошибка';
        return;
    }

    // массив операторов
    const operators = result.split('').filter(char => ['-', '+', '×', '/', '%'].includes(char));

    // проверяем адекватное ли кол-во операторов
    if (numbers.length - operators.length !== 1) {
        document.getElementById("result").textContent = 'Ошибка';
        return;
    }

    let calculatedResult = numbers[0];

    for (let i = 0; i < operators.length; i++) {
        const operator = operators[i];
        const nextOperator = operators[i+1];
        const currentNumber = numbers[i + 1];
        const pastNumber = numbers[i];

        console.log(pastNumber, operator)

        switch (operator) {
            case '+':
                if (nextOperator === '%'){
                    calculatedResult += (currentNumber / 100 * calculatedResult)
                }
                else calculatedResult += currentNumber;
                break;
            case '-':
                if (nextOperator === '%'){
                    calculatedResult -= (currentNumber / 100 * calculatedResult)
                }
                else calculatedResult -= currentNumber;
                break;
            case '×':
                if (nextOperator === '%'){
                    calculatedResult *= (currentNumber / 100)
                }
                else calculatedResult *= currentNumber;
                break;
            case '/':
                calculatedResult /= currentNumber;
                break;
            default:
                break;
        }
    }

    document.getElementById("result").textContent = calculatedResult;
}
export function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}

export function toggleStyle() {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-light');
    } else {
        setTheme('theme-dark');
    }
}

(function () {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-dark');
    } else {
        setTheme('theme-light');
    }
})();