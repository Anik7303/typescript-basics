/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */

let apples: number = 5;
let speed: string = "fast";
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// buildt in objects
let now: Date = new Date();

// Array
let colors: string[] = ["red", "blue", "green"];
let myNumber: number[] = [1, 2, 3];
let truths: boolean[] = [true, false, true];

// classes
class Car {}
let car: Car = new Car();

// object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};
