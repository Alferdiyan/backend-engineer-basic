// Overriding
// Konsep lain yang lekat dengan pewarisan adalah overriding. Overriding di dalam OOP merupakan fitur yang memperbolehkan subclass mendefinisikan implementasinya sendiri pada sebuah method yang sebenarnya sudah didefinisikan pada superclass-nya. Overriding diterapkan ketika kita ingin menetapkan implementasi yang spesifik di subclass pada sebuah method yang berasal dari superclass. Overriding juga biasa diterapkan ketika kita ingin menambah properti baru secara spesifik pada sebuah subclass.

// Di JavaScript dan bahasa pemrograman yang menerapkan paradigma OOP lainnya, overriding umumnya dapat dilakukan pada constructor dan method class.

// Constuctor Overriding
// Constructor merupakan method spesial pada class yang akan dipanggil pada saat pembuatan instance, lebih tepatnya ketika menggunakan keyword new diikuti dengan nama class.

const mailService = new MailService(); // akan memanggil method constructor pada class MailService
