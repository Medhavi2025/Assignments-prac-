// Q1
// 1. Function with no parameters that returns a string
function sayHello() {
    return "Hello, World!";
}

// Q2
// 2. Function with Parameters
function doubleNumber(num) {
    return num * 2;
}

// Q3
// 3. Simple Return Function
function addTwoNumbers(num1, num2) {
    return num1 + num2;
}

// Q4
// 4. Arrow Function (converted from doubleNumber)
const doubleNumberArrow = (num) => num * 2;


// Q5
// 5. Arithmetic Operator
function subtractTen(num) {
    return num - 10;
}


// Q6
// 6. Comparison Operator
function isGreaterThanFive(num) {
    return num > 5;
}

// 7. Logical Operator
function isBetweenOneAndTen(num) {
    return num >= 1 && num <= 10;
}

// 8. If-Else Statement
function isEven(num) {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

// 9. Ternary Operator
function checkAge(age) {
    return age >= 18 ? "Adult" : "Minor";
}

// 10. Switch Statement
function getDayType(day) {
    switch(day) {
        case 6:
        case 7:
            return "Weekend";
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            return "Weekday";
        default:
            return "Invalid day"; // In case an invalid number is passed
    }
}
