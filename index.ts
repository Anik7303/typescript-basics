// Classes

class Vehicle {
  // public color: string;

  // constructor(color: string) {
  //   this.color = color;
  // }

  constructor(public color: string) {}
  // constructor(protected color: string) {}
  // constructor(private color: string) {}

  protected drive(): void {
    console.log("vroom");
  }

  public honk(): void {
    console.log("beep");
  }

  private blink(): void {
    console.log("blink");
  }
}

// class Car extends Vehicle {
//   protected drive(): void {
//     console.log("vrooooom");
//   }

//   public initializeDrive(): void {
//     this.drive();
//   }
// }

const vehicle = new Vehicle("red");
// vehicle.drive();
vehicle.honk();
console.log(vehicle.color);

// const car = new Car();
// car.initializeDrive();
