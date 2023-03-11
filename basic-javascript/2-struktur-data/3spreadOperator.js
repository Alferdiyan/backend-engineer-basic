console.log('spread Operator');
// Spread Operator
// Masih terkait dengan array, ES6 memiliki fitur menarik untuk membantu pengelolaan array menjadi lebih mudah, yaitu spread operator.

// Sesuai namanya “spread”, fitur ini digunakan untuk menyebarkan nilai array atau lebih tepatnya iterable object menjadi beberapa elemen. Spread operator dituliskan dengan tiga titik (...). Mari kita lihat contoh kode berikut:
const favorites = ['Seafood', 'Salad', 'Nugget', 'Soup'];

console.log(favorites); // output  ['Seafood', 'Salad', 'Nugget', 'Soup']
console.log(...favorites); //output Seafood Salad Nugget Soup

// sama dengan
console.log(favorites[0], favorites[1], favorites[2], favorites[3]);

// dapat digunakan untuk menggabungkan 2 buah array
console.log('penggabungan tanpa spread operator');
const others = ['Cake', 'Pie', 'Donut'];
console.log('penggabungan data');
// const allFavorites = [favorites, others];
// console.log(allFavorites);
// output
const tanpaSpread = [
  ['Seafood', 'Salad', 'Nugget', 'Soup'],
  ['Cake', 'Pie', 'Donut'],
];
console.log(tanpaSpread);

// penggabungan menggunakan spread
console.log('penggabungan data dengan spread operator');
const allFavorites = [...favorites, ...others];
console.log(allFavorites);

//-------------------object literal
console.log('object literal');
const obj1 = { firstName: 'Obi-Wan', age: 30 };
console.log(obj1);

const obj2 = { lastName: 'Kenobi', gender: 'M' };
console.log(obj2);

console.log('data new objek');

const newObj = { ...obj1, ...obj2 };

console.log(newObj);

const myTrial = { namaDepan: 'ferdinan', namaBelakang: 'webdev' };
console.log(myTrial);
