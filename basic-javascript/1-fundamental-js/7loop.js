// Loop
// Ketika menulis program komputer, akan ada situasi di mana kita perlu melakukan hal yang sama berkali-kali. Misalnya kita ingin menampilkan semua nama pengguna yang terdaftar di aplikasi atau sesederhana menampilkan angka 1 sampai 10. Tentunya tidak praktis jika kita menulis kode seperti berikut:

// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);
// console.log(8);
// console.log(9);
// console.log(10);

// konsep
// 1 For loop
// 2 For of loop
// 3 While and do-while
// 4 Infinite loops

// {'For loop
//     for(inisialisasi variabel; test kondisi; perubahan nilai variabel) {
//     // do something
//     }'
console.log('contohhh');
for (let i = 0; i < 5; i++) {
  console.log(i);
}
// Lebih ringkas, bukan? Mungkin kode tersebut sulit dipahami, jadi mari kita bahas sedikit demi sedikit. Terdapat tiga bagian utama dalam sintaks for di atas:

// Pertama, variabel i sebagai index iterasi. Pada variabel ini kita menginisialisasi nilai awal dari perulangan.
// Kedua, operasi perbandingan. Pada bagian ini, JavaScript akan melakukan pengecekan kondisi apakah perulangan masih perlu dilakukan. Jika bernilai true, maka kode di dalam blok for akan dijalankan.
// Ketiga, increment/decrement. Di sini kita melakukan penambahan atau pengurangan variabel iterasi. Jadi, pada contoh di atas variabel i akan ditambah dengan 1 di setiap akhir perulangan. Perubahan nilai ini penting karena jika kita mengubah nilainya, proses perulangan dapat terus berjalan selama kondisinya terpenuhi.
// JIka diartikan, maka kode di atas bisa dimaknai dengan “Jika i kurang dari 5, maka tampilkan nilai i.”

// For of loop
// Cara lain dalam melakukan looping adalah menggunakan for..of. For of mulai hadir pada ECMAScript 2015 (ES6). Cara ini jauh lebih sederhana dan modern dibanding for loop biasa. Sintaks dasar dari for of loop adalah seperti ini:

// for(arrayItem of myArray) {
//     // do something
// }
console.log('contoh for of Loop');
let myArray = ['Luke', 'Han', 'Chewbacca', 'Leia'];

for (const arrayItem of myArray) {
  console.log(arrayItem);
}

//  While and do-while
// Metode lain untuk melakukan looping adalah dengan statement while. Sama seperti for, instruksi while mengevaluasi ekspresi boolean dan menjalankan kode di dalam blok while ketika bernilai true.

// Untuk menampilkan angka 1 sampai 100 dengan while kita bisa menulis kode seperti berikut:
console.log('contoh while and do while');
let i = 1;

while (i <= 100) {
  console.log(i);
  i++;
}

// let i = 1;

i = 1;

do {
  console.log(i);
  i++;
} while (i <= 100);

// Infinite loops
console.log('invifinity loop');
// let a = 1;

// while (a <= 5) {
//   console.log(i);
// }
