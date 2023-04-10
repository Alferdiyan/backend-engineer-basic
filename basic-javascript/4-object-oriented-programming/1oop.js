// Object-Oriented Programming (OOP) adalah salah satu paradigma dalam pemrograman yang berfokus pada pembuatan sebuah objek dan interaksi dengan objek-objek tersebut. Di OOP, objek merupakan sebuah entitas yang terdiri dari dua hal, yakni properties dan methods.

// Properti merupakan nilai di dalam objek yang menyimpan informasi tentang objek tersebut.
// Method merupakan fungsi yang menggambarkan aksi yang dapat dilakukan oleh objek tersebut.
// Paradigma OOP kerap digambarkan dengan kehidupan dunia nyata. Objek di dalam OOP, bisa kita anggap seperti objek yang ada di dunia nyata. Kita ambil contoh, mobil. Dalam OOP, sebuah mobil dapat dilihat sebagai objek yang memiliki beberapa properti seperti merek, warna, kecepatan maksimal, dan nomor rangka. Objek tersebut memiliki kemampuan atau method seperti maju, mundur, dan belok.

// Object	Mobil
// Properties	Merek
// Warna
// Kecepatan maksimal
// Nomor rangka
// Methods	Maju
// Mundur
// Belok
// Lalu, seperti apa bentuk objek mobil dalam bentuk JavaScript? Sama seperti yang sudah Anda ketahui di modul Struktur Data, objek mobil dibuat dengan menggunakan tanda kurung kurawal dan untuk method-nya, Anda cukup buat properti yang merupakan sebuah fungsi, contohnya seperti ini

const car = {
  // properties
  brand: 'Ford',
  color: 'red',
  maxSpeed: 200,
  chassisNumber: 'f-1',
  // methods
  drive: () => {
    console.log('driving');
  },
  reverse: () => {
    console.log('reversing');
  },
  turn: () => {
    console.log('turning');
  },
};

console.log(car.brand); // Ford
console.log(car.color); // red
console.log(car.maxSpeed); // 200
console.log(car.chassisNumber); // f-1
car.drive(); // driving
car.reverse(); // reversing
car.turn();

//   Kode di atas merupakan contoh objek mobil atau car di JavaScript. Seperti yang Anda lihat, objek car memiliki properti brand, color, maxSpeed, dan chassisNumber; dan juga method drive, reverse, dan turn. Kita bisa akses nilai properti dan panggil method yang ada di dalam objek tersebut.

// Di JavaScript untuk membuat sebuah objek terlihat mudah, bukan? Namun, masalah yang dipecahkan oleh paradigma OOP tidak hanya sebatas membuat objek sederhana saja. Seiring berkembangnya aplikasi, pembuatan objek akan semakin banyak dan saling berinteraksi satu dengan yang lainnya. Sehingga, kita harus mengetahui cara efektif mengelola objek termasuk cara membuatnya.

// Mari kita angkat sebuah masalah baru dari contoh kode di atas. Bagaimana jika Anda ingin membuat objek dua mobil baru dengan nilai yang berbeda? Haruskah Anda mendefinisikan properti dan method yang sama secara berulang seperti contoh kode di bawah ini?
const car = {
  brand: 'Ford',
  color: 'red',
  maxSpeed: 200,
  chassisNumber: 'f-1',
  drive: () => {
    console.log('driving');
  },
  reverse: () => {
    console.log('reversing');
  },
  turn: () => {
    console.log('turning');
  },
};

//   Kami rasa kode di atas sungguh tidak efektif. Bagaimana jika ada banyak mobil yang harus Anda buat? Contoh, Anda membangun aplikasi yang memiliki entitas pelanggan. Jika Anda menggunakan cara di atas, mampukah Anda membuat objek pelanggan jika aplikasi sudah digunakan oleh 100 pelanggan?

// Dalam memecahkan masalah ini, OOP menawarkan sebuah solusi yakni dengan membuat object blueprint. Melalui object blueprint, kita bisa membuat cetakan untuk membuat objek yang sudah terdefinisikan macam-macam properti dan method-nya. Sehingga kita cukup menggunakan cetakan tersebut untuk membuat objek yang serupa, tetapi kita bisa menentukan nilai-nilai properti yang berbeda.

// Contohnya, Anda bisa membuat sebuah blueprint bernama Car. Di dalam blueprint tersebut, Anda bisa definisikan properti-properti dan method yang ingin dimiliki objek mobil nantinya. Setelah membuat sebuah blueprint, Anda bisa dengan mudah membuat banyak objek mobil contohnya myCar, yourCar, dan dicodingCar dengan lebih mudah.

// dos:71dbd0d10580d72576d5b917d052c7ef20221222122416.jpeg

// Di dalam OOP, object blueprint tersebut bernama class. Penasaran seperti apa class di JavaScript? Simak materi selanjutnya, ya!
