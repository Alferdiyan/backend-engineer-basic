// Set
// Struktur data yang akan kita bahas berikutnya adalah Set. Set sederhananya merupakan kumpulan nilai (set of values). Hal yang membedakan Set dengan struktur data yang lain adalah data pada Set tidak berurutan dan juga tidak diindeks. Selain itu, data di dalam Set juga bersifat unik dan tidak ada duplikasi. Perhatikan contoh deklarasi Set di bawah ini:
const numberSet = new Set([1, 4, 6, 4, 1]);

console.log(numberSet);

/* output
Set(3) { 1, 4, 6 }
*/

numberSet.add(5);
numberSet.add(10);
numberSet.add(6);
numberSet.delete(1);

console.log(numberSet);
