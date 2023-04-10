// Konsep-Konsep Functional Programming
// Setelah Anda memiliki sedikit gambaran tentang bagaimana paradigma FP dapat membuat kode yang Anda tuliskan lebih mudah dibaca dan ringkas, kini saatnya Anda ketahui, apa saja konsep-konsep dasar yang ada di dalam paradigma FP.

// Di sini kita akan membahas 4 konsep besar yang ada di FP. Yakni Pure Function, Immutability, Recursive, dan High-Order Function.

// Pure Function
// Salah satu konsep besar dari paradigma FP adalah Pure Function. Apa artinya? Pure Function merupakan konsep dari pembuatan fungsi yang mengharuskan fungsi untuk tidak bergantung terhadap nilai yang berada di luar fungsi atau parameternya. Sehingga mau seperti apa keadaanya, fungsi yang dibuat selalu menghasilkan sesuatu yang sama, terkecuali bila fungsi tersebut diberikan nilai parameter yang berbeda.

// Untuk lebih jelasnya, simak kode berikut:
// let PI = 3.14;

// const hitungLuasLingkaran = (jariJari) => {
//   return PI * (jariJari * jariJari);
// };

// console.log(hitungLuasLingkaran(4)); // 50.24

// PI = 5; // tidak sengaja nilai PI berubah

// console.log(hitungLuasLingkaran(4)); // 80

// maka untuk mengubah menjadi pure Function

// console.log('pure Function');
// const hitungLuasLingkaranBaru = (jariJari) => {
//   return 3.14 * (jariJari * jariJari);
// };

// console.log(hitungLuasLingkaranBaru(4)); // 50.24
// console.log(hitungLuasLingkaranBaru(14)); // 50.24
// console.log(hitungLuasLingkaranBaru(8)); // 200.96
// console.log(hitungLuasLingkaranBaru(8)); // 200.96

const createPersonWithAge = (age, person) => {
  return { ...person, age };
};

// spread operator supaya person bisa bergabung dalam satu object

const person = {
  name: 'Bobo',
};

console.log(person);

const newPerson = createPersonWithAge(18, person);

console.log(newPerson);

const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];

const newNamesWithExcMark = names.map((name) => `${name}!`);

console.log({
  names,
  newNamesWithExcMark,
});

// Rekursif
// Konsep selanjutnya yang ada di Functional Programming adalah rekursif. Apa itu rekursif? Rekursif merupakan teknik pada sebuah function yang memanggil dirinya sendiri.

// Kita akan mencoba mengubah fungsi countDown yang biasanya kita buat menggunakan sintaksis iterasi seperti for, foreach, while seperti kode di bawah menjadi bentuk rekursif.

const countDown = (start) => {
  do {
    console.log(start);
    start -= 1;
  } while (start > 0);
};

countDown(10);
// Maka, bentuk rekursinya adalah sebagai berikut:

const countDown1 = (start) => {
  console.log(start);
  if (start > 0) countDown1(start - 1);
};

countDown1(10);

// Higher-Order Function
// JavaScript memiliki kemampuan First Class Functions, karena itu fungsi pada JavaScript dapat diperlakukan layaknya sebuah data. Kita bisa menyimpan function dalam variabel, memberikan function sebagai parameter pada fungsi lainnya, hingga mengembalikan function di dalam function.

const hello = () => {
  console.log('Hello!');
};

const say = (someFunction) => {
  someFunction();
};

const sayHello = () => {
  return () => {
    console.log('Hello!');
  };
};

hello();
say(hello);
sayHello()();

/**
 * Hello!
 * Hello!
 * Hello!
 */

// Karena dengan kemampuan First Class Functions-nya itu, kita dapat membuat Higher-Order Function secara mudah. Tunggu, tunggu. Apa itu Higher-Order Function?

// Higher-Order Function menjadi bagian konsep pada paradigma FP. Higher-Order Function merupakan fungsi yang dapat menerima fungsi lainnya pada argumen; mengembalikan sebuah fungsi; atau bahkan keduanya.

// Teknik Higher-Order Function biasanya digunakan untuk:

// Mengabstraksi atau mengisolasi sebuah aksi, event, atau menangani alur asynchronous menggunakan callback, promise, dan lainnya.
// Membuat utilities yang dapat digunakan di berbagai tipe data.
// Membuat teknik currying atau function composition.
// Array map() merupakan salah satu contoh Higher-Order Function yang ada di JavaScript. Karena dalam penggunaanya, ia menerima satu buah argumen yang merupakan sebuah function.

// Dengan mengetahui adanya Higher-Order Function, Anda bisa membuat fungsi map() versi Anda sendiri!

const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];

const arrayMap = (arr, action) => {
  const loopTrough = (arr, action, newArray = [], index = 0) => {
    const item = arr[index];
    if (!item) return newArray;
    return loopTrough(arr, action, [...newArray, action(arr[index])], index + 1);
  };

  return loopTrough(arr, action);
};

const newNames = arrayMap(names, (name) => `${name}!`);

console.log({
  names,
  newNames,
});

/**
 * output:
 * {
 *   names: [ 'Harry', 'Ron', 'Jeff', 'Thomas' ],
 *   newNames: [ 'Harry!', 'Ron!', 'Jeff!', 'Thomas!' ]
 * }
 */
