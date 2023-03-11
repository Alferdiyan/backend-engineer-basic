// Tipe Data
// Pada materi sebelumnya kita telah belajar tentang variabel untuk menyimpan nilai. Nilai yang kita tetapkan pada variabel pasti memiliki tipe data. Tipe data merupakan pengklasifikasian data berdasarkan jenisnya. Pada JavaScript terdapat beberapa tipe data sebagai berikut:

//  1...Undefined

// Tipe data ini terbentuk ketika sebuah variabel tidak memiliki nilai. Artinya, ketika kita mendeklarasikan variabel tanpa menginisialisasikan nilainya, variabel tersebut menjadi undefined. Contoh:

console.log('Type data');
console.log('   ');
let x = '0';
console.log(typeof x); /* output: string */

x = 0;
console.log(typeof x); /* output: number */

x = true;
console.log(typeof x); /* output: boolean */

x;
console.log(typeof x); /* output: undefined */

// Pada contoh kode di atas, kita mendeklarasikan variabel x, tetapi kita tidak menginisialisasikan dengan nilai apa pun. Ketika kita memastikan tipe data dengan menggunakan fungsi typeof(), ia akan menghasilkan output undefined.

// Fungsi typeof() digunakan untuk memastikan tipe data pada variabel dengan mengembalikan tipe data tersebut dalam bentuk teks.

// 2...Numbers
// Nilai dari tipe data number adalah angka. Variabel bertipe data number dituliskan seperti angka pada umumnya:

// let x = 10;
// Jika angka tersebut merupakan sebuah bilangan desimal, maka kita bisa gunakan tanda titik pada pecahan bilangannya.

{
  /* Pada tipe data number, kita juga dapat melakukan perhitungan aritmatika seperti penjumlahan, pengurangan, perkalian, dsb. Berikut operator yang dapat kita gunakan dalam perhitungan aritmatika pada tipe data number: */
}

{
  /*
Opr	Fungsi	     Contoh
+	Penjumlahan	10 + 10 = 20
-	Pengurangan	15 - 7 = 8
/	Pembagian	21 / 7 = 3
*	Perkalian	9 * 9 = 81
%	Sisa hasil bagi	5 % 2 = 1
**	Perpangkatan	3 ** 3 = 27
*/
}

console.log('....');
console.log('operator pada number');
console.log('....');

let a = 12;
let b = 9;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

/* output:
21
3
108
1.3333333333333333
3
*/

{
  /*
Pada operator aritmatika juga terdapat operator increment (++) dan decrement (--). Operator increment dan decrement digunakan untuk menambahkan atau mengurangi nilai 1 pada nilai variabel yang ada sekarang.

Operator ini dapat dituliskan sebelum atau sesudah variabel, tetapi hal tersebut bukan berarti sama. Berikut ketentuannya:

Jika dituliskan setelah variabel (x++), expression akan menghasilkan nilai variabel sebelum ditingkatkan nilainya.
Jika dituliskan sebelum variabel (++x), expression akan menghasilkan nilai variabel setelah ditingkatkan nilainya.
Untuk lebih jelasnya, berikut adalah contoh kode penerapan operator tersebut, perhatikan hasil yang didapat. */
}

/* Increment dan Decrement */

console.log('');
console.log('Increment dan Decrement');
let postfix = 5;
console.log(postfix++);
/* output: 5 */
console.log(postfix);
/* output: 6 */

let prefix = 5;
console.log(++prefix);
/* output: 6 */

/* BigInt
Pada JavaScript, tipe data “Number” hanya mencakup nilai dari -(253 - 1) hingga (253 - 1). Untuk kebutuhan umum, sebenarnya nilai tersebut sudah sangat cukup. Namun, akan ada kebutuhan tertentu di mana kita membutuhkan cakupan nilai yang lebih besar, seperti untuk kriptografi atau menentukan waktu hingga presisi microsecond.

Untuk nilai di luar Number, kita bisa menggunakan tipe BigInt. Untuk membedakan tipe BigInt dan Number, tambahkan karakter n di akhir angka. Contohnya adalah seperti kode di bawah ini. Bandingkan dengan yang bertipe Number. */

console.log('bigNumber');
const bigNumber = 1234567890123456789012345678901234567890n;
const myInt = 1234567890123456789012345678901234567890;

console.log(bigNumber);
console.log(myInt);

/* output
1234567890123456789012345678901234567890n
1.2345678901234568e+39
*/

// Meskipun digunakan untuk menyimpan angka dengan nilai besar, namun BigInt tetap bisa digunakan untuk nilai yang lebih kecil.

const bigIntButSmall = 7n;

// Kita juga bisa menggunakan BigInt untuk operasi aritmatika pada umumnya. Yang membedakan adalah pada operasi pembagian, hasilnya akan dibulatkan ke bawah dan tanpa mengandung nilai desimal. Contohnya adalah seperti ini:
console.log(5n + 2n);
console.log(5n - 2n);
console.log(5n * 2n);
console.log(5n / 2n);
console.log(5n % 2n);

/* output
7n
3n
10n
2n; Bukan 2.5n
1n
*/

// Strings
// Tipe data selanjutnya adalah string yang merupakan sebuah teks. Untuk menetapkan nilai sebagai string pada variabel gunakan tanda petik satu (‘) atau petik dua (“) di antara teksnya. Contohnya:
let greet = 'Hello';
console.log(typeof greet);

/* output: string */

// let greet = 'Hello';
// console.log(typeof greet);

/* output: string */

// Tidak ada perbedaan antara menggunakan petik satu atau petik dua. Anda dapat menggunakan tanda petik secara bergantian, khususnya jika Anda memiliki teks yang mengandung tanda petik.

const question = '"What do you think of JavaScript?" I asked';

console.log(question);

/* output: "What do you think of JavaScript?" I asked */

// Lalu bagaimana jika teks memiliki kedua tanda petik seperti ini?
// const answer = '"I think it's awesome!" he answered confidently';

// console.log(answer);

/*
Tentunya kode di atas akan menghasilkan eror. Solusinya, gunakan backslash(\) untuk mengurangi ambiguitas dalam tanda petik. Mekanisme ini juga dikenal dengan nama escape string. Sehingga kode di atas akan menjadi seperti berikut:

const answer = '"I think it\'s awesome!" he answered confidently';
Backslash sebelum tanda petik akan memberitahukan interpreter bahwa itu hanyalah tanda petik dan tidak boleh ditafsirkan sebagai pembatas string. Selain tanda petik, backslash juga berguna untuk mengabaikan simbol lain yang menimbulkan ambigu di dalam string, contohnya seperti backslash itu sendiri.

console.log("Windows path: C:\\Program Files\\MyProject");
Pada String, kita juga dapat menggunakan operator plus (+). Operator tersebut berfungsi untuk menggabungkan dua teks yang terpisah menjadi satu buah teks. Contohnya seperti ini:
*/

// let greet = "Hello";
let moreGreet = greet + greet;
console.log(moreGreet);

/* output: HelloHello */

// Ingat, string concatenation seperti di atas akan menggabungkan string apa adanya, sehingga jika Anda ingin menggabungkan dua kata atau lebih perlu menambahkan spasi sendiri.

// Selain concatenation, string pada JavaScript juga mendukung string interpolation. Sederhananya, kita bisa memasukkan variabel ke dalam sebuah string template. Contohnya adalah seperti berikut:
const myName = 'Luke';
console.log(`Hello, my name is ${myName}.`);

/* output: Hello, my name is Luke. */

// Perhatikan bahwa untuk mendefinisikan string template, Anda perlu menggunakan backticks (`), biasanya terletak di keyboard di bawah tombol Esc . Di dalam string letakkan variabel yang ingin dimasukkan ke dalam placeholder ${myName}.

// Boolean
// Boolean hanya memiliki dua nilai, yaitu true atau false. Tipe data ini menjadi kunci utama dalam penentuan logika. Kita akan banyak menggunakannya nanti dalam materi if/else statement. Untuk menetapkan nilai boolean pada variabel, gunakan keyword true atau false seperti di bawah ini.

// let x = true;
let y = false;

console.log(typeof x);
console.log(typeof y);

/* output: 
boolean
boolean
*/

// Kita juga bisa menggunakan operator komparasi seperti lebih dari (>) atau kurang dari (<). Contohnya:

a = 10;
b = 12;

let isGreater = a > b;
let isLess = a < b;

console.log(isGreater);
console.log(isLess);

/* output:
false
true
*/

// Null
// Tipe berikutnya adalah null. Serupa dengan undefined, namun null perlu diinisialisasikan pada variabel. Null biasa digunakan sebagai nilai sementara pada variabel, tapi sebenarnya nilai tersebut “tidak ada”.

// Terkadang kita perlu membuat sebuah variabel, namun kita belum memerlukan nilai apa-apa dan tidak ingin terikat oleh tipe data apa pun. Nah, daripada kita tidak menetapkan nilai apa pun (variabel akan undefined) sebaiknya kita beri nilai null pada variabel tersebut dan ubah nanti ketika kita membutuhkannya.

// Untuk menetapkan null pada variabel, kita dapat gunakan keyword null ketika variabel tersebut diinisialisasi.

let someLaterData = null;
console.log(someLaterData);

/* output:
null
*/

// Symbol
// Symbol adalah tipe data baru yang dikenalkan pada ES6. Tipe data Symbol digunakan untuk menunjukkan identifier yang unik. Ketika membuat Symbol, kita bisa memberikan deskripsi atau nama symbol seperti ini:
const id = Symbol('id');

console.log(id);

/* output
Symbol(id)
*/

// Symbol disebut sebagai identifier yang unik karena meskipun kita membuat dua variabel symbol dengan nama atau deskripsi yang sama, kedua nilainya tetap dianggap berbeda. Contohnya lihat kode berikut:
const id1 = Symbol('id');
const id2 = Symbol('id');

console.log(id1 == id2);

/* output
false
*/

// Symbol ini umumnya digunakan sebagai nama property dari Object. Object sendiri merupakan tipe data kompleks untuk menyimpan berbagai struktur data. Kita akan segera bertemu dan mempelajari tentang object pada modul Data Structure.
