// 1. Use `push()` to add an element to an array
let fruits = ["Apple", "Banana"];
fruits.push("Orange");
console.log(fruits); // ["Apple", "Banana", "Orange"]

// 2. Use `pop()` to remove the last element from an array
let veggies = ["Carrot", "Broccoli", "Spinach"];
veggies.pop();
console.log(veggies); // ["Carrot", "Broccoli"]

// 3. Use `shift()` to remove the first element from an array
let animals = ["Lion", "Tiger", "Elephant"];
animals.shift();
console.log(animals); // ["Tiger", "Elephant"]

// 4. Use `unshift()` to add an element to the beginning of an array
let cars = ["Tesla", "Ford"];
cars.unshift("BMW");
console.log(cars); // ["BMW", "Tesla", "Ford"]

// 5. Use `splice()` to modify an array by removing or adding elements
let numbers = [1, 2, 3, 4, 5];
numbers.splice(2, 1, 10); // Removes 1 element at index 2, adds 10
console.log(numbers); // [1, 2, 10, 4, 5]

// 6. Use `slice()` to create a new array from a portion of an existing array
let colors = ["Red", "Green", "Blue", "Yellow"];
let newColors = colors.slice(1, 3); // Extracts elements from index 1 to 2 (3 is excluded)
console.log(newColors); // ["Green", "Blue"]

// 7. Use `indexOf()` to find the index of an element in an array
let beverages = ["Coffee", "Tea", "Juice"];
let index = beverages.indexOf("Tea");
console.log(index); // 1

// 8. Use `map()` to create a new array by transforming each element
let nums = [1, 2, 3, 4];
let doubledNums = nums.map(num => num * 2);
console.log(doubledNums); // [2, 4, 6, 8]

// 9. Use `filter()` to filter elements from an array based on a condition
let ages = [12, 18, 22, 15, 30];
let adults = ages.filter(age => age >= 18);
console.log(adults); // [18, 22, 30]

// 10. Use `reduce()` to calculate a single value from an array
let values = [1, 2, 3, 4];
let sum = values.reduce((acc, val) => acc + val, 0);
console.log(sum); // 10
