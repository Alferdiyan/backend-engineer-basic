// 1
// const coffeeStock = require('./state');

// const makeCoffee = (type, miligrams) => {
//   if (coffeeStock[type] >= miligrams) {
//     console.log(type);
//     console.log('kopi berhasil dibuat');
//   } else {
//     console.log('biji kopi habis');
//   }
// };

// makeCoffee('arabica', 900);
// console.log('hasil dari import');
// console.log(coffeeStock);

// 2 import beberapa variable

const { coffeeStock, isCoffeeMachineReady } = require('./state');

console.log(coffeeStock);
console.log(isCoffeeMachineReady);
