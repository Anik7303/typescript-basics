// Classes

class Vehicle {
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

class Car extends Vehicle {
  protected drive(): void {
    console.log("vrooooom");
  }

  public initializeDrive(): void {
    this.drive();
  }
}

const vehicle = new Vehicle();
// vehicle.drive();
vehicle.honk();

const car = new Car();
car.initializeDrive();
