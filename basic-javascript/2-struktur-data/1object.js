// Kali ini kita akan berkenalan dengan tipe data object. Sebuah tipe data yang sangat berguna dalam pengembangan aplikasi dengan JavaScript. Object mampu menyimpan nilai dari beragam tipe data dan membentuk data yang lebih kompleks.

// Untuk menetapkan objek pada sebuah variabel kita gunakan tanda kurung kurawal {}.

// const user = {};
// Object berisi pasangan key dan value yang juga dikenal dengan property. Key berperan mirip seperti nama variabel yang menyimpan sebuah nilai. Sementara, value berisi nilai dengan tipe data apa pun termasuk objek lain. Key dan value di dalam object dituliskan seperti berikut:

// let object = {key1: "value1", key2: "value2", key3: "value3"}
// Key harus berupa string dan dituliskan sebelum titik dua (:), lalu diikuti dengan value-nya. Meskipun key merupakan string, kita tidak perlu menuliskan tanda petik kecuali ada karakter khusus seperti spasi.
// Tanda koma pada properti terakhir bersifat opsional. Namun, jika tanda koma tersebut ditulis akan lebih memudahkan ketika kita ingin memindah, mengubah, atau menghapus properti.

// Satu object dapat memiliki beberapa pasang key-value yang dipisahkan dengan tanda koma (,).

// const user = {firstName: "Luke", lastName: "Skywalker", age: 19, isJedi: true};

// Dalam menuliskan objek, baris baru tidaklah penting dan tidak akan berpengaruh apa pun. Sehingga lebih baik setiap kita menetapkan key-value buatlah baris baru untuk memisahkan antar nilainya. Hal ini akan memudahkan kita dalam membaca dan memahami struktur data dari sebuah object.
// const user = {
//     firstName: "Luke",
//     lastName: "Skywalker",
//     age: 19,
//     isJedi: true,
// };
// Kemudian untuk mengakses nilai dari properti object, kita dapat memanggil nama object lalu tanda titik dan diikuti nama propertinya. Contoh:

const user = {
  firstName: 'Luke',
  lastName: 'Skywalker',
  age: 19,
  isJedi: true,
  'home world': 'Tattooine', // kalo ada spasi pada nama keynya maka pakai tanda petik
};

console.log(`Halo, nama saya ${user.firstName} ${user.lastName}`);
console.log(`Umur saya ${user.age} tahun`);
console.log(`Saya berasal dari ${user['home world']}`); // pemanggilannya pakai bracket kalau ada spasi

// --------------------------------------------
// pemanggilan bisa menggunakan
//  nama key diikuti titik
// nama key diikuti dengan bracket atau kurung siku, untuk data key spasi
console.log('');
console.log('pemangillan ada 2');
console.log('key diikuti titik dan nama properti');
console.log(`Halo, nama saya ${user.firstName} ${user.lastName}`);

console.log('key diikuti bracket berisi nama properti');
console.log(`Saya berasal dari ${user['home world']}`); // pemanggilannya pakai bracket kalau ada spasi

// -----------------------------------
// memodifikasi sebuah object
console.log('');
console.log('memodifikasi object');
console.log('contoh');

const spaceship = {
  name: 'Millenium Falcon',
  manufacturer: 'Corellian Engineering Corporation',
  maxSpeed: 1200,
  color: 'Light gray',
};

// menambah sebuah key
spaceship.color = 'Glossy red';
spaceship['maxSpeed'] = 1300;

console.log(spaceship);

// ---------------------------------------------------------
// kenapa const masih bisa diubah datanya
// Tunggu dulu. Object spaceship dideklarasikan sebagai const, tetapi kenapa kita bisa mengubah nilainya?

// Yang perlu diperhatikan adalah mengubah nilai berbeda dengan menginisialisasi ulang nilai. Ketika membuat sebuah object, kita tidak terikat dengan properti di dalamnya sehingga kita masih bisa memodifikasi nilainya. Berbeda jika kita menginisialisasi ulang variabel dari object.

// const spaceship = {
//     name: "Millenium Falcon",
//     manufacturer: "Corellian Engineering Corporation",
//     maxSpeed: 1200,
//     color: "Light gray"
// };

// spaceship = { name: "New Millenium Falcon" }; // Error

// ----------------------------------
// menghapus data properti
console.log('menghapus data porperti dengan keryword delete');
delete spaceship.manufacturer;

console.log('data setelah dihapus');
console.log(spaceship);
