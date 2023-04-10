//------------------Destructuring Assignment
console.log('Destructuring object');
const profile = {
  firstName: 'John',
  lastName: 'Doe',
  age: 18,
};

const { firstName, lastName, age } = profile; //memecah data

console.log(firstName, lastName, age);
// console.log(profile.firstName, profile.lastName, profile.age);
console.log(profile);

console.log('');

/* output:
John Doe 18
*/

//------------------Destructuring Assignment
console.log('Destructuring Assignment');

const profile1 = {
  firstName1: 'John',
  lastName1: 'Doe',
  age1: 18,
};

let firstName1 = 'Dimas';
let age1 = 20;

// menginisialisasi nilai baru melalui destructuring object
({ firstName1, age1 } = profile1);

console.log(firstName1);
console.log(age1);
const newProfile = { ...profile1, ...profile };
console.log(newProfile);

/* output:
John
18
*/

//------------------Default Values
console.log('Default Values');
const pengguna = {
  namaDepan: 'John',
  namaBelakang: 'Doe',
  usia: 18,
};

const { namaDepan, usia, isMale = false } = pengguna;
//pada isMale=false, kata false itu adalah jawaban default

console.log(namaDepan);
console.log(usia);
console.log(isMale);

//------------------Assigning to Different Local Variable Names
console.log('Assigning to Different Local Variable Names');
