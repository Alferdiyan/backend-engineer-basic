// const favorites = ['Seafood', 'Salad', 'Nugget', 'Soup'];

// const [firstFood, secondFood, thirdFood, fourthFood] = favorites;

// console.log(firstFood);
// console.log(secondFood);
// console.log(thirdFood);
// console.log(fourthFood);

// console.log(favorites[1]);

/* output:
Seafood
Salad
Nugget
Soup
*/

console.log('');
console.log('destructuring Assigment');

const favorites = ['Seafood', 'Salad', 'Nugget', 'Soup'];

let myFood = 'Ice Cream'; // menukar nilai 2 variabel myFood ke seafood
let herFood = 'Noodles'; // menukar nilai 2 variabel herFood ke slad

[myFood, herFood] = favorites;

console.log(myFood);
console.log(herFood);

/* output:
Seafood
Salad
*/

// -------------------------- penukaran nnilai jaman dahulu
// var a = 1;
// var b = 2;
// var temp;

// console.log('Sebelum swap');
// console.log('Nilai a: ' + a);
// console.log('Nilai b: ' + b);

// temp = a;
// a = b;
// b = temp;

// console.log('Setelah swap');
// console.log('Nilai a: ' + a);
// console.log('Nilai b: ' + b);

// ---------------------- cara baru dalam swap data
let a = 1;
let b = 2;

console.log('Sebelum swap');
console.log('Nilai a: ' + a);
console.log('Nilai b: ' + b);

[a, b] = [b, a]; // menetapkan nilai a dengan nilai b dan nilai b dengan nilai a.

console.log('Setelah swap');
console.log('Nilai a: ' + a);
console.log('Nilai b: ' + b);

/* output
Sebelum swap
Nilai a: 1
Nilai b: 2
Setelah swap
Nilai a: 2
Nilai b: 1
*/
