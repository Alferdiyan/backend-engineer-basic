//----------------Properti Getter dan Setter
// Secara standar, properti di dalam sebuah instance class bersifat mutable atau dapat diubah nilainya. Meskipun kita sudah menetapkan nilai chassisNumber oleh sistem, nyatanya nilai tersebut dapat diubah dengan mudah ketika objek mobil telah dibuat.

// ---data dalam class yaitu chasis masih dapat  berubah
// class Car {
//   constructor(brand, color, maxSpeed) {
//     this.brand = brand;
//     this.color = color;
//     this.maxSpeed = maxSpeed;
//     this.chassisNumber = `${brand}-${Math.floor(Math.random() * 1000)}`;
//   }
// }
// console.log('car awal');
// const car = new Car('BMW', 'red', 200);
// console.log(car);
// console.log('');

// console.log('car awal akhir dengan data chasis ditentukan atau di update');
// car.chassisNumber = 'BMW-1';
// console.log(car);

/* Output:
  Car { brand: 'BMW', color: 'red', maxSpeed: 200, chassisNumber: 'BMW-1' }
  */

// ---memproteksi data
console.log('');
console.log('');
console.log('');

class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(fullName) {
    const [firstName, lastName] = fullName.split(' ');
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const user = new User('John', 'Doe');
console.log(user);
console.log(user.fullName);

user.fullName = 'Fulan Fulanah';
console.log(user);
console.log(user.fullName);

/* Output:
  User { firstName: 'John', lastName: 'Doe' }
  John Doe
  User { firstName: 'Fulan', lastName: 'Fulanah' }
  Fulan Fulanah
  */
console.log('');
// kemanli kekasus chasis number
class Car {
  constructor(brand, color, maxSpeed) {
    this.brand = brand;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this._chassisNumber = `${brand}-${Math.floor(Math.random() * 1000)}`;
  }

  get chassisNumber() {
    return this._chassisNumber;
  }

  set chassisNumber(chassisNumber) {
    console.log('you are not allowed to change the chassis number');
  }
}

console.log('');
console.log('data awal');
const car = new Car('BMW', 'red', 200);

console.log(car);
console.log(car.chassisNumber); // memunculkan data chasis

console.log('');
console.log('data ketika dirubah');
car.chassisNumber = 'BMW-1';
console.log(car.chassisNumber);

/* Output:
  BMW-232
  you are not allowed to change the chassis number
  BMW-232
  */

//   Catatan

// Sebenarnya nilai chassisNumber masih bisa berubah jika kita mengubah langsung melalui properti _chassisNumber. Namun, ketahuilah bahwa mengubah atau mendapatkan nilai properti objek yang diawali dengan tanda underscore tidak direkomendasikan. Alasanya, komunitas JavaScript menyepakati bahwa hal properti yang diberi tanda underscore bukan untuk diakses, alias bersifat privat.

// JavaScript versi ES2022 hadir dengan fitur private identifier. Dengan fitur tersebut, kita bisa membuat private property. Ini akan memecahkan masalah di atas. Private property akan kami bahas pada materi Member Visibility.
