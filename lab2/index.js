const gretter = (myArray, counter) => {
    const greetText = 'Hello '; // this variable holds the greeting word
    // for..of loop gets each name in the array one by one
    for (const item of myArray) {
        console.log(`${greetText}${item}`); // prints the greeting and name together
    }
};
gretter(['Randy Savage', 'Ric Flair', 'Hulk Hogan'], 3);


// 'first' gets the first letter, 'rest' gets all other letters
const capitalize = ([first, ...rest]) => first.toUpperCase() + rest.join('').toLowerCase();

console.log(capitalize('fooBar'));
console.log(capitalize('nodeJs'));


const colors = ['red', 'green', 'blue'];
// map goes through each color and runs the capitalize function on it
const capitalizedColors = colors.map(color => capitalize(color));
console.log(capitalizedColors);


const values = [1, 60, 34, 30, 20, 5];
// filter keeps only the numbers that are smaller than 20
const filterLessThan20 = values.filter(value => value < 20);

console.log(filterLessThan20);
const array = [1, 2, 3, 4];
// starts at 0 and adds each number to the total
const calculateSum = array.reduce((acc, curr) => acc + curr, 0);
// starts at 1 and multiplies each number with the total
const calculateProduct = array.reduce((acc, curr) => acc * curr, 1);
console.log(calculateSum);
console.log(calculateProduct);
class Car {
    constructor(model, year) {
        this.model = model; // sets the car model
        this.year = year;   // sets the car year
    }
    details() {
        return `Model: ${this.model} Engine ${this.year}`;
    }
}

// sedan class inherits from car class using extends
class Sedan extends Car {
    constructor(model, year, balance) {
        super(model, year); // sends model and year back to the parent car class
        this.balance = balance; 
    }
    info() {
        return `${this.model} has a balance of $${this.balance.toFixed(2)}`;
    }
}

const car2 = new Car('Pontiac Firebird', 1976);
console.log(car2.details());

const sedan = new Sedan('Volvo SD', 2018, 30000);
console.log(sedan.info());