/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */

let apples = 5;
let speed = "fast";
let hasName = true;

let nothingMuch = null;
let nothing = undefined;

// buildt in objects
let now: Date = new Date();

// Array
let colors = ["red", "blue", "green"];
let myNumber = [1, 2, 3];
let truths = [true, false, true];

// classes
class Car {}
let car = new Car();

// object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// When to use annotations
// 1. Function that returns the 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);

// 2. When we declare a variable on one line
// and initialze it later
let words = ["red", "green", "blue"];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === "green") {
    foundWord = true;
  }
}

// 3. Variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numbersAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numbersAboveZero = numbers[i];
  }
}
