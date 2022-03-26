// Interfaces

interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
}

const oldChivic = {
  name: 'chivic',
  year: 2000,
  broken: true
}

// const printVehicle = (vehicle: {name: string; year: number; broken: boolean}): void => {
const printVehicle = (vehicle: Vehicle): void => {
console.log(`Name: ${vehicle.name}`)
  console.log(`Year: ${vehicle.year}`)
  console.log(`Broken? ${vehicle.broken}`)
}

printVehicle(oldChivic)
