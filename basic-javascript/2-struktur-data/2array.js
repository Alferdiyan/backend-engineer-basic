console.log('array');
// Array merupakan tipe data yang dapat mengelompokkan lebih dari satu nilai dan menempatkannya dalam satu variabel. Contoh:

let myArray = ['Cokelat', 42.5, 22, true, 'Programming'];
console.log(myArray);

/* output:
[ 'Cokelat', 42.5, 22, true, 'Programming' ]
*/

// ------------------------------Pemanggilan--------------------------------
// Perbedaan array dengan object adalah data pada array disusun secara berurutan dan diakses menggunakan index. Untuk mengakses nilai di dalam array, kita gunakan tanda kurung siku [] yang di dalamnya berisi angka yang merupakan posisi nilai yang ingin diakses.

// Dalam sebuah array, indeks dimulai dari 0, sehingga ketika kita mengakses data pada myArray yang berada pada indeks ke-1 artinya data tersebut merupakan data pada posisi ke-2. Jadi nilai yang akan ditampilkan pada konsol adalah 42.5.

// pemanggilan array, data dimulali dari angka 0
console.log(myArray[1]); // output 42,5

//Lalu, apa yang akan terjadi jika kita berusaha mengakses index di luar ukuran array-nya? Jika kita mengakses nilai array lebih dari index-nya, maka hasilnya akan undefined. Index terakhir array selalu jumlah nilai array - 1.
console.log(myArray[0]);
console.log(myArray[1]);
console.log(myArray[2]);
console.log(myArray[3]);
console.log(myArray[4]);
console.log(myArray[5]);
console.log('Panjang nilai myArray adalah ' + myArray.length + '.');

// -------------------------manipulasi data array
console.log('data sebelum manipulasi data');
console.log(myArray);
// menambah datacdi akhir , push()
myArray.push('JavaScript', 'reactjs');

console.log('data setelah push()');
console.log(myArray);

// mengeluarkan data diakhir, pop()
myArray.pop('JavaScript');

console.log('data setelah pop()');
console.log(myArray);

// -------------------------------------------
console.log('');
console.log('data awal');
console.log(myArray);
// shift() digunakan untuk mengeluarkan elemen pertama dari array
console.log('setelah shift');
myArray.shift();
console.log(myArray);

// unshift() digunakan untuk menambahkan elemen di awal array.
console.log('setelah unshift');
myArray.unshift('Apple');
console.log(myArray);

// delete digunakan namun meninggalkan data yang kososng
delete myArray[1];

console.log('data setelah delete');
console.log(myArray);

// splice untuk menghapus elemen
myArray.splice(1, 2); // Menghapus dari index 1 sebanyak 2 elemen, kalau angka sata misal 1 berarti g meniggalkan sisa satu angka di awal, jika -1 menghapus satu di belakang
console.log('data setelah splice()');
console.log(myArray);
