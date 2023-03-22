// ------------Properti dan Method
// Di materi sebelumnya, Anda sudah tahu bahwa class (function constructor dalam JavaScript) merupakan sebuah object blueprint yang dapat membuat sebuah objek serupa lebih mudah. Dengan menggunakan class, kita bisa terhindar dari banyak duplikasi kode dalam membuat banyak objek sekaligus.

// Di dalam sebuah class, kita dapat mendefinisikan dua hal, yaitu properti dan method. Di materi kali ini kita akan membahas lebih detail mengenai keduanya.

// Properti
// Properti merupakan bagian dari class yang mendefinisikan nilai-nilai yang terkandung dalam sebuah instance class. Contohnya, jika Anda membuat class Car, properti adalah informasi yang sekiranya terdapat pada sebuah mobil seperti brand, color, maxSpeed, dan chasissNumber. Contoh lain, jika Anda membuat class Mail, secara umum propertinya adalah sender, receiver, subject, dan body.
class Car {
  constructor(brand, color, maxSpeed, chassisNumber) {
    this.brand = brand;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this.chassisNumber = chassisNumber;
  }
}

class Mail {
  constructor(sender, receiver, subject, body) {
    this.sender = sender;
    this.receiver = receiver;
    this.subject = subject;
    this.body = body;
  }
}

const car1 = new Car('BMW', 'red', 200, 'b-1');
const car2 = new Car('Audi', 'blue', 220, 'a-1');
const car3 = new Car('BMW', 'black', 250, 'b-2');

// console.log(car1);
// console.log(car2);
// console.log(car3);

// ---------nomer chassis dengan hitungan
console.log('nomer chassis dengan hitungan');
class Car2 {
  constructor(brand, color, maxSpeed) {
    this.brand = brand;
    this.color = color;
    this.maxSpeed = maxSpeed;
    // Set a random chassis number
    this.chassisNumber = `${brand}-${Math.floor(Math.random() * 1000) + 1}`;
  }
}

const car01 = new Car2('BMW', 'red', 200);
const car02 = new Car2('Audi', 'blue', 220);
const car03 = new Car2('BMW', 'black', 250);

console.log(car01);
console.log(car02);
console.log(car03);

/* Output:
  Car { brand: 'BMW', color: 'red', maxSpeed: 200, chassisNumber: 'BMW-558' }
  Car { brand: 'Audi', color: 'blue', maxSpeed: 220, chassisNumber: 'Audi-215' }
  Car { brand: 'BMW', color: 'black', maxSpeed: 250, chassisNumber: 'BMW-799' }
  */
