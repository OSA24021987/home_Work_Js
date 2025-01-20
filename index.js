// Задача №1.

/*
let firstNumber = prompt('введите первое число', '');
let secondNumber = prompt('введите второе число', '');
let summa = 0;
firstNumber = +firstNumber;
secondNumber = +secondNumber;

if (firstNumber < secondNumber) {
    while (firstNumber <= secondNumber) {
        summa = summa + firstNumber;
        firstNumber++;
    }
}

else if (firstNumber > secondNumber) {
    while (firstNumber >= secondNumber) {
        summa = summa + secondNumber;
        secondNumber++;
    }
}

else {
    summa = firstNumber;
}
alert(summa);
*/
//---------------------------------------------------------------------

// Задача №2.

/*
let first_Number = prompt('введите первое число', '');
let second_Number = prompt('введите второе число', '');
let maxNod = 0;
first_Number = +first_Number;
second_Number = +second_Number;

if (first_Number > second_Number) {
    for (let i = 0; i <= second_Number; i++) {
        if (first_Number % i == 0 && second_Number % i == 0) {
            maxNod = i;
        }
    }
}

else if (second_Number > first_Number) {
    for (let i = 0; i <= first_Number; i++) {
        if (first_Number % i == 0 && second_Number % i == 0) {
            maxNod = i;
        }
    }
}

else {
    maxNod = second_Number;
}
alert(maxNod);
*/
//--------------------------------------------------------------------------

// Задача №3.

/*
let yourNumber = prompt('Введите число', '');
yourNumber = +yourNumber;
let delitel = 0;
for (let i = 2; i <= yourNumber; i++) {
    if (yourNumber % i == 0) {
        delitel = i;
        alert(delitel);

        yourNumber = yourNumber / i;
        i = 1;
    }
}
*/   
//---------------------------------------------------------------------------

// Задача №4.

/*
let yuor_Number = prompt('введите число', '');
yuor_Number = +yuor_Number;
let kolichestvoDigitals = 0;
while (yuor_Number >= 1) {
    yuor_Number = yuor_Number / 10;
    kolichestvoDigitals++;
}
alert(kolichestvoDigitals);
*/
//----------------------------------------------------------------------------

// Задача №5.

/*
let i = 0;
let numberPlus = 0;
let numberMinus = 0;
let numberZero = 0;
let numberEven = 0;
let numberOdd = 0;
while (i < 10) {
    let userNumber = prompt('введите дусять чисел: положительных, отрицательных, а также ноль');
    if (i % 2 == 0) {
        numberEven++;
    }
    else {
        numberOdd++;
    }
    if (userNumber > 0) {
        numberPlus++;
    }
    else if (userNumber < 0) {
        numberMinus++;
    }
    else {
        numberZero++;
    }
    i++;
}
console.log(`Положительных чисел = ${numberPlus}`);
console.log(`Отрицательных чисел = ${numberMinus}`);
console.log(`Нулей = ${numberZero}`);
console.log(`Четных чисел = ${numberEven}`);
console.log(`Нечетных чисел = ${numberOdd}`);
*/
//--------------------------------------------------------------------------

// Задача №6.

/*
let i = 0;
let summa = 0;
let raznost = 0;
let umnoghenie = 0;
let delenie = 0;

while (i == 0) {
    let firstrNumber = prompt('Ведите первое число', '');
    let secondNumber = prompt('Ведите второе число', '');
    let operationSign = prompt('Ведите знак', '');

    if (operationSign == '+') {
        summa = +firstrNumber + +secondNumber;
        console.log(`Cумма ${firstrNumber} + ${secondNumber} = ${summa}`);
        let user_Question = confirm('Хотите ли он решить еще один пример?');
        if (user_Question == true) {
            i = 0;
        }
        else {
            i = 1;
        }
    }
    else if (operationSign == '-') {
        raznost = firstrNumber - secondNumber;
        console.log(`Разность ${firstrNumber} - ${secondNumber} = ${raznost}`);
        let user_Question = confirm('Хотите ли он решить еще один пример?');
        if (user_Question == true) {
            i = 0;
        }
        else {
            i = 1;
        }
    }
    else if (operationSign == '*') {
        umnoghenie = firstrNumber * secondNumber;
        console.log(`Умножение ${firstrNumber} * ${secondNumber} = ${umnoghenie}`);
        let user_Question = confirm('Хотите ли он решить еще один пример?');
        if (user_Question == true) {
            i = 0;
        }
        else {
            i = 1;
        }
    }
    else if (operationSign == '/') {
        delenie = firstrNumber / secondNumber;
        console.log(`Деление ${firstrNumber} / ${secondNumber} = ${delenie}`);
        let user_Question = confirm('Хотите ли он решить еще один пример?');
        if (user_Question == true) {
            i = 0;
        }
        else {
            i = 1;
        }
    }
}
alert('До свидания!');
*/
//---------------------------------------------------------------------------------

