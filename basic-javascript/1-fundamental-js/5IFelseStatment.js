console.log('IF Else Statment');

// Truthy & Falsy

console.log('Contoh');

const isRaining = true;

console.log(isRaining, 'kondisi');

console.log('Persiapan sebelum berangkat kegiatan.');
if (isRaining) {
  console.log('Hari ini hujan. Bawa payung.');
} else {
  console.log('Waw Cuaca cerah langsung berangkat');
}
console.log('Berangkat kegiatan.');

/* output: True
Persiapan sebelum berangkat kegiatan.
Hari ini hujan. Bawa payung.
Berangkat kegiatan.
 */

/* output: false
Persiapan sebelum berangkat kegiatan.
Berangkat kegiatan.
 */

console.log('');
// contoh Lain

console.log('contoh lain');
let x = 50;

if (x > 70) {
  console.log(x);
} else {
  console.log('Nilai kurang dari 70');
}

/* output
Nilai kurang dari 70
*/

console.log('Kita juga bisa mengecek beberapa kondisi sekaligus dengan menggabungkan else dan if. Contohnya adalah seperti program berikut:');

let language = 'French';
let greeting = 'Selamat Pagi';

if (language === 'English') {
  greeting = 'Good Morning!';
} else if (language === 'French') {
  greeting = 'Bonjour!';
} else if (language === 'Japanese') {
  greeting = 'Ohayou Gozaimasu!';
}

console.log(greeting);

/* output
Bonjour!
*/

console.log('');
// ternary operator
// Ternary operator membutuhkan tiga operand. Sebelum tanda tanya (?) berisi kondisi yang ingin kita evaluasi. Kemudian diikuti dengan expression apabila nilai kondisinya benar sebelum tanda titik dua. Terakhir adalah expression yang dieksekusi ketika kondisinya salah. Karena merupakan conditional expression, maka operand kedua dan ketiga harus mengembalikan nilai.

console.log('contoh ternary operator');
// condition ? true expression : false expression

const isMember = true;
console.log('member atau bukan?', isMember);
const discount = isMember ? 0.1 : 0;
console.log(`Anda mendapatkan diskon sebesar ${discount * 100}%`);

/* output
Anda mendapatkan diskon sebesar 0%
 */

// Truthy and Falsy

console.log('Truthy and Falsy contoh');
// i dalam if statement kita perlu memasukkan expression yang akan dievaluasi. Umumnya, expression tersebut mengembalikan nilai boolean untuk menentukan kondisi true atau false. Lalu bagaimana jika kita menuliskan expression yang tidak mengembalikan nilai boolean? Jawabannya bisa.

// Setiap nilai pada JavaScript pada dasarnya juga mewarisi sifat boolean. Nilai ini dikenal dengan truthy atau falsy. Nilai truthy berarti nilai yang ketika dievaluasi akan menghasilkan nilai true, begitu pula falsy bernilai false. Jadi manakah yang termasuk truthy dan falsy? Selain nilai boolean false, tipe data atau nilai yang dianggap falsy, antara lain:

// Number 0
// BigInt 0n
// String kosong seperti “” atau ‘’
// null
// undefined
// NaN, atau Not a Number
// Selain contoh di atas maka nilainya adalah truthy dan ketika dievaluasi ke dalam if statement akan bernilai true. Berikut ini contohnya dalam kode:

// contoh
let name = '';

if (name) {
  console.log(`Halo, ${name}`);
} else {
  console.log('Nama masih kosong');
}

/* output:
Nama masih kosong
 */
