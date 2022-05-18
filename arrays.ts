const carMakers = ['ford', 'toyota', 'chevy']
const dates = [new Date(), new Date()]

// const carsByMake: string[][] = [
//   ['f150'],
//   ['corolla'],
//   ['camaro']
// ]
const carsByMake: string[][] = []


// Help with inference when extracting values
const car = carMakers[0]
const myCAr = carMakers.pop();

// Prevent incompatible values
// carMakers.push(100)

// Help with 'map'
carMakers.map((car: string):string => {
  return car.toUpperCase();
})

// arrays with multiple types
// const importantDates: (string | Date)[] = ['10/12/2021', new Date(), '04/04/2008']
const importantDates = ['10/12/2021', new Date(), '04/04/2008']
importantDates.push(new Date())
importantDates.push('26-03-2022')
// importantDates.push(100) // shows an error
