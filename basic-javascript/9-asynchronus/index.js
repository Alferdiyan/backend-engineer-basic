console.log('Selamat datang!');

// ============================Asynchronous case setTimeOut()
// muncul setelah 3000 milisecond
setTimeout(() => {
  console.log('Terima kasih sudah mampir, silakan datang kembali!');
}, 3000);
// ============================Asynchronous

console.log('Ada yang bisa dibantu?');

// ============================Asynchronous Handling Dengan Callback dan promise
// ============================1. Asynchronous Handling Dengan Callback
function getUsers(callback) {
  // simulate network delay
  setTimeout(() => {
    const users = ['John', 'Jack', 'Abigail'];

    callback(users);
  }, 3000);
}

function usersCallback(users) {
  console.log(users);
}

getUsers(usersCallback);
console.log('callback');

// ============================2. Asynchronous Handling Dengan promise
