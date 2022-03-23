/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */

const add = (a: number, b: number): number => {
  return a + b;
};

const subtract = (a: number, b: number): number => {
  return a - b;
};

function multiply(a: number, b: number): number {
  return a * b;
}

const divide = function (a: number, b: number): number {
  return a / b;
};

// void annotation type
const logger = (message: string): void => {
  console.log(message);
};

const throwError = (message: string): never => {
  throw new Error(message);
};

// destructuring annotations
const todaysWeather: { date: Date; weather: string } = {
  date: new Date(),
  weather: "sunny",
};

const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};

logWeather(todaysWeather);
