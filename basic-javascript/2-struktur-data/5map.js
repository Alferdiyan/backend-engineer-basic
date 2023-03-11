// Map
// Map adalah tipe data yang menyimpan koleksi data dengan format key-value layaknya Object. Yang membedakan adalah Map memperbolehkan key dengan tipe data apa pun, dibandingkan Object yang hanya mengizinkan key bertipe String atau Symbol.

// Untuk mendefinisikan Map gunakan constructor seperti di bawah ini:

// const myMap = new Map();
// Apabila ingin menetapkan nilai dari Map secara langsung, gunakan array multi dimensi seperti ini:

const myMap = new Map([
  ['1', 'a String key'],
  [1, 'a number key'],
  [true, true],
]);

console.log(myMap);
console.log('');

/* output
Map(3) { '1' => 'a String key', 1 => 'a number key', true => true }
*/

// ------------------------- mengambil key dengan get() dan menambah data dengan set()
// Ketika sudah membuat objek Map, kita bisa mendapatkan nilainya berdasarkan key tertentu dengan metode get(). Lalu, untuk menambahkan pasangan key-value baru gunakan metode set().

const capital = new Map([
  ['Jakarta', 'Indonesia'],
  ['London', 'England'],
  ['Tokyo', 'Japan'],
]);

console.log(capital);
console.log(capital.size);
console.log(capital.get('London')); //mendapatkan nilai
capital.set('New Delhi', 'India'); //menambah data dengan set
console.log(capital.size);
console.log(capital.get('New Delhi'));
console.log(capital);

/* output
3
England
4
India
 */
// ----------------------------? map ang salah

const wrongMap = new Map();

wrongMap['My Key'] = 'My Value';
wrongMap['My Key1'] = 'My Value1';
wrongMap['My Key2'] = 'My Value2';
console.log(wrongMap['My Key']);
console.log(wrongMap);

// Namun, kode di atas bukanlah cara yang sesuai untuk mengoperasikan Map. Ketika kita menetapkan nilai map seperti di atas, data akan disimpan sebagai generic object. Ini akan mengakibatkan data tidak tersimpan dalam Map query dan tidak bisa menggunakan fitur dari Map seperti .has atau .delete.
console.log(wrongMap.has('My Key'));
console.log(wrongMap.delete('My Key'));
