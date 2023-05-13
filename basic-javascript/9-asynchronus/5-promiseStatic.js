// Promise memiliki beberapa static method yang dapat digunakan untuk mempermudah penggunaan dalam berbagai kasus. Pada materi ini, kami akan membahas empat static method dari class Promise yang umum digunakan, yaitu Promise.all, Promise.race, Promise.allSettled, dan Promise.any.

console.log('Promise ALL');

// const promise1 = new Promise((resolve) => setTimeout(() => resolve(''), 1000));
// const promise2 = new Promise((resolve) => setTimeout(() => resolve(2), 2000));
// const promise3 = new Promise((resolve) => setTimeout(() => resolve(3), 3000));

// Promise.all([promise1, promise2, promise3]).then((values) => console.log(values)); // [1, 2, 3] setelah 3 detik

const promise0 = new Promise((resolve) => setTimeout(() => resolve('0. contoh promise all'), 1000));
const promise1 = new Promise((resolve) => setTimeout(() => resolve(1), 1000));
const promise2 = new Promise((reject) => setTimeout(() => reject(new Error('ups')), 500));
const promise3 = new Promise((resolve) => setTimeout(() => resolve(3), 3000));

const promise4 = new Promise((reject) => setTimeout(() => reject(new Error('wah gagal (contoh promise all)')), 1000));

Promise.all([promise0, promise1, promise2, promise3, promise4])
  .then((values) => console.log(values))
  .catch((error) => console.log(error.message)); // ups, tergantung yang paling cepat mana annti langsung berhenti, skip yang  lain meskipun fullfiled

Promise.race([promise1, promise2, promise3]).then((value) => console.log(`Promise race ${value} di eksekusi yang paling cepat`)); // 1 setelah 1 detik

// Promise.allSettled([promise0, promise1, promise3, promise4]).then((results) => console.log(results));

console.log('Promise race');
console.log('Promise AllSetled');
console.log('Promise Any');
