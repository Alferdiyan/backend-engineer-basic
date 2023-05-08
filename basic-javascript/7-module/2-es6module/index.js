// const coffeeStock = require('./state');  khusus untuk module.exsport
// import coffeeStock from './state.js';

// const displayStock = (angka) => {
//   for (const miligrams in angka) {
//     console.log(miligrams);
//   }
// };

// displayStock(coffeeStock);

import { coffeeStock as stock, isCoffeeMachineReady } from './state.js';

console.log(stock);
console.log(isCoffeeMachineReady);
