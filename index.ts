// Interfaces

interface Vehicle {
  summary(): string;
}

const oldChivic = {
  name: "chivic",
  year: 2000,
  broken: true,
  summary() {
    return `Name: ${this.name}`;
  },
};

// const printVehicle = (vehicle: {name: string; year: number; broken: boolean}): void => {
const printVehicle = (vehicle: Vehicle): void => {
  console.log(vehicle.summary);
};

printVehicle(oldChivic);
