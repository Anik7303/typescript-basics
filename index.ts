class ArrayOfAnything<T> {
  constructor(private collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

// const arr = new ArrayOfAnything<string>(["a", "b", "c", "d"]);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const arr = new ArrayOfAnything(["a", "b", "c", "d"]); // This is equivalant to the previous line because of type inference in typescript

// Generics with Functions
function printAnything<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

// printAnything<number>([1, 2, 3, 4])
printAnything([1, 2, 3, 4]);

// Generic Constraints

interface Printable {
  print(): void;
}

class Car {
  print(): void {
    console.log("I am a car");
  }
}

class House {
  print(): void {
    console.log("I am a house");
  }
}

function printHousesOrCars<T extends Printable>(arr: T[]) {
  for (let i = 0; i < arr.length; i++) {
    arr[i].print();
  }
}

printHousesOrCars<House>([new House(), new House()]);
printHousesOrCars<Car>([new Car(), new Car()]);
