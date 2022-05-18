import "reflect-metadata";

class Plane {
  color = "red";

  fly(): void {
    console.log("vrrrrr");
  }
}

// assign metadata to a class
// Reflect.defineMetadata("secret", "secret info", Plane);
// const secret = Reflect.getMetadata("secret", Plane);
// console.log({ secret });

// assign metadata to a property of class
Reflect.defineMetadata("secret", "secret info", Plane, "color");
const secret = Reflect.getMetadata("secret", Plane, "color");
console.log({ secret });
