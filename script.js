// script.js

// Q1 - Square each element of an array using map and arrow function
/*
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(num => num * num);
console.log(squaredNumbers);
*/

// Q2 - Grade function using ternary operators
/*
const getGrade = score => 
  score >= 90 ? 'A' :
  score >= 80 ? 'B' :
  score >= 70 ? 'C' :
  score >= 60 ? 'D' : 'F';

console.log(getGrade(85)); // B
console.log(getGrade(92)); // A
console.log(getGrade(65)); // D
*/

// Q3 - Car object, function to change year, and object destructuring
/*
let car = {
  companyName: "Toyota",
  model: "Camry",
  year: 2020
};

function changeYear(car, newYear) {
  car.year = newYear;
}

changeYear(car, 2023);

const { model, year } = car;
console.log(`Model: ${model}, Year: ${year}`);
*/

// Q4 - Filter prime numbers from an array
/*
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const primes = numbers.filter(isPrime);
console.log(primes);
*/

// Q5 - Use cases of map, filter, and reduce
/*
// map: transform each element in an array
const doubledNumbers = [1, 2, 3, 4, 5].map(num => num * 2);

// filter: create a subset of an array based on a condition
const evenNumbers = [1, 2, 3, 4, 5].filter(num => num % 2 === 0);

// reduce: accumulate values from an array into a single result
const sum = [1, 2, 3, 4, 5].reduce((acc, curr) => acc + curr, 0);

console.log(doubledNumbers, evenNumbers, sum);
*/

// Q6 - Async function to fetch data from an API
/*
async function fetchData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetchData();
*/

// Q7 - Nested object and optional chaining
/*
const person = {
  name: "John Doe",
  address: {
    street: "123 Main St",
    city: "Anytown"
  },
  // contact property is intentionally missing
};

const phoneNumber = person.contact?.phone;
console.log(phoneNumber); // undefined (no error thrown)
*/

// Uncomment the solution you want to run and comment out the others