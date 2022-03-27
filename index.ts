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

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  protected drive(): void {
    console.log("vrooooom");
  }

  public initializeDrive(): void {
    this.drive();
  }

  public getColor(): string {
    return this.color;
  }
}

const vehicle = new Vehicle("red");
// vehicle.drive();
vehicle.honk();
console.log(vehicle.color);

const car = new Car(4, "orange");
car.initializeDrive();
console.log(car.getColor());
