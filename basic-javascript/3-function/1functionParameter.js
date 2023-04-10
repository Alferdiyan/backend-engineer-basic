// ------------------------ Function

// ---------------------1 Parameter dan argument

// Parameter adalah variabel yang didefinisikan dalam tanda kurung saat mendefinisikan fungsi. Parameter ini digunakan untuk menentukan nilai yang diharapkan atau diperlukan oleh fungsi untuk berjalan dengan benar. Parameter adalah variabel lokal pada fungsi, artinya mereka hanya dapat diakses dari dalam fungsi itu sendiri.

// Berikut adalah contoh definisi fungsi dengan satu parameter:
function greet(name, long) {
  console.log('Halo, ' + name + ' ' + long + '!');
}

//   Dalam contoh di atas, "name" adalah parameter fungsi. Ketika fungsi ini dipanggil dengan nilai "John", maka "John" akan menjadi nilai dari parameter "name":

greet('John', 'doe'); // Output: "Halo, John!"

// Argument, di sisi lain, adalah nilai yang dikirimkan ke dalam fungsi saat dipanggil. Argument ini mengisi nilai dari parameter pada saat fungsi dijalankan. Jadi, argument adalah nilai yang benar-benar digunakan oleh fungsi ketika dijalankan.

// Parameter merupakan variabel yang didefinisikan sebagai inputan dari sebuah fungsi. Contoh:

// function multiply(a, b) {
//     return a * b;
// }

// Argument merupakan nilai atau expression yang dimasukkan ke dalam fungsi. Contohnya:
// multiply(3, 4);

const user = {
  id: 24,
  displayName: 'kren',
  fullName: 'Kylo Ren',
};
const user2 = {
  id: 24,
  displayName: 'ferdi',
  fullName: 'Eka Ferdiyanto',
};

// fungsi dengan 2 parameter yaitu displayName dan fullName

function introduce({ displayName, fullName }) {
  console.log(`${displayName} is ${fullName}`);
}

introduce(user2); // argument yang berisi nilai

// -------------2-Default Parameter

// default nilai apabila dalam argument tidak terdapat value saat di panggil

// value exponent punya nilau default 2, apabila tidak ditentukan nilainya,

function exponentsFormula(baseNumber, exponent = 2) {
  let result = baseNumber ** exponent;
  console.log(`${baseNumber}^${exponent} = ${result}`);
}

console.log('diketahui base number saja');
exponentsFormula(3);

console.log('diketahui keduanya');
exponentsFormula(3, 9);

// -----------------------3. Rest Parameter
// Masih ingat dengan spread operator (...)? Jika spread operator menyebarkan array menjadi beberapa elemen berbeda, rest parameter ini adalah kebalikan dari operator tersebut. Penasaran?

// Rest parameter juga dituliskan menggunakan three consecutive dots (...). Dengan rest parameter, kita dapat menggabungkan beberapa elemen menjadi satu array. Tentu teknik ini sangat bermanfaat ketika kita hendak membuat sebuah fungsi dengan parameter yang tidak pasti.

// Sebagai contoh adalah fungsi yang menjumlahkan seluruh nilai argumen seperti berikut:

console.log('Res PArameter');

function sum(...numbers) {
  let result = 0;
  for (let number of numbers) {
    result += number;
  }
  return result;
}

console.log(sum(1, 2, 3, 4, 5));

/* output
15
*/
