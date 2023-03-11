// Operator

//1 Assignment Operator

//2 Comparison Operator

//3 Perbedaan antara “Sama” dan “Identik”

//4 Logical Operator

// Assignment Operator
// x = y;
// Expression di atas berarti kita menginisialisasikan nilai y pada variabel x, sehingga nilai x sekarang memiliki nilai yang sama dengan y.

// Ada beberapa assignment operator tambahan lain dalam menginisialisasikan nilai pada variabel. Kita bisa menyebutnya sebagai shortcut dalam menentukan nilai. Contohnya:
// Pada contoh kode di atas, terdapat expression x += y; Apa artinya? Assignment operator tersebut digunakan sebagai shortcut dari x = x + y. Cara ini juga dapat digunakan pada operator aritmatika lain seperti, perkalian, pengurangan, pembagian, dan lainnya.
let x = 10;
let y = 5;

x += y; // artinya -> x = x + y;
x -= y; // artinya -> x = x - y;
x *= y; // artinya -> x = x * y;
x /= y; // artinya -> x = x / y;
x %= y; // artinya -> x = x % y;

//2 Comparison Operator
// Operator	Fungsi
// ==	Membandingkan kedua nilai apakah sama (tidak identik).
// !=	Membandingkan kedua nilai apakah tidak sama (tidak identik).
// ===	Membandingkan kedua nilai apakah identik.
// !==	Membandingkan kedua nilai apakah tidak identik.
// >	Membandingkan dua nilai apakah nilai pertama lebih dari nilai kedua.
// >=	Membandingkan dua nilai apakah nilai pertama lebih atau sama dengan nilai kedua.
// <	Membandingkan dua nilai apakah nilai pertama kurang dari nilai kedua.
// <=	Membandingkan dua nilai apakah nilai pertama kurang atau sama dengan nilai kedua.
// Contoh
let a = 10;
let b = 12;

console.log(a < b);
console.log(a > b);

/* output
true
false
*/

//3 Perbedaan antara “Sama” dan “Identik”
// Dalam operator komparasi di JavaScript, hal yang menjadi sedikit “tricky” adalah membedakan antara “sama” (==) dan “identik” (===).

// Kita sudah mengetahui bahwa setiap nilai pasti memiliki tipe data baik itu number, string atau boolean. Contohnya sebuah string “10” dan number 10 merupakan hal yang serupa, tetapi keduanya tidak benar-benar sama.

// Hal inilah yang membedakan antara sama dan identik pada JavaScript. Jika kita ingin membandingkan hanya dari kesamaan nilainya kita bisa gunakan == tapi jika kita ingin membandingkan dengan memperhatikan tipe datanya kita gunakan ===.
const aString = '10';
const aNumber = 10;

console.log(aString == aNumber); // true, karena nilainya sama-sama 10
console.log(aString === aNumber); // false, karena walaupun nilainya sama, tetapi tipe datanya berbeda

//4 Logical Operator
// Terdapat beberapa operator lain yang dapat kita gunakan untuk menetapkan logika yang lebih kompleks, yakni dengan logical operators. Dengan logical operator, kita dapat menggunakan kombinasi dari dua nilai boolean atau bahkan lebih dalam menetapkan logika.

// Pada JavaScript terdapat tiga buah karakter khusus yang berfungsi sebagai logical operator. Berikut macam-macam logical operator dan fungsinya:

// Operator	Deskripsi
// &&	Operator dan (and). Logika akan menghasilkan nilai true apabila semua kondisi terpenuhi (bernilai true).
// ||	Operator atau (or). Logika akan menghasilkan nilai true apabila ada salah satu kondisi terpenuhi (bernilai true).
// !
// Operator tidak (not). Digunakan untuk membalikkan suatu kondisi.

let a = 10;
let b = 12;

/* AND operator */
console.log(a < 15 && b > 10); // (true && true) -> true
console.log(a > 15 && b > 10); // (false && true) -> false

/* OR operator */
console.log(a < 15 || b > 10); // (true || true) -> true
console.log(a > 15 || b > 10); // (false || true) -> true

/* NOT operator */
console.log(!(a < 15)); // !(true) -> false
console.log(!(a < 15 && b > 10)); // !(true && true) -> !(true) -> false

/* output
true
false
true
true
false
false
*/
