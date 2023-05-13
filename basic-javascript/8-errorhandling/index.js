// const hello = 'terdefinisi';
// const errorCode = console.log(hello);
// try {
//   // kode
//   console.log('awal block try');

//   console.log('akhir block try');
// } catch (error) {
//   // error handling
//   console.log('ini errror');
// }
// #1

// try {
//   console.log('Awal blok try'); // (1)
//   //   errorCode; // (2)
//   console.log('Akhir blok try'); // (3)
// } catch (error) {
//   console.log(error.name);
//   console.log(error.message);
//   console.log(error.stack);
// } finally {
//   console.log('tetep eksekusi');
// }

// dala try di eksekusi, ketika eror sintak setelah eror dilewati dan masuk ke catch, setelah itu masuk ke finnaly tetap tereksekusi

// #2

// const json = '{ "name": "Yoda", "age": 20 }';
// const json = '{ Bad jason }';

// try {
//   const user = JSON.parse(json);

//   console.log(user.name);
//   console.log(user.age);
// } catch (error) {
//   console.log(error.name);
//   console.log(error.message);
// }

// case

// const json = '{ "age": 20 }';

// try {
//   const user = JSON.parse(json);

//   console.log(user.name); // undefined
//   console.log(user.age);  // 20
// } catch (error) {
//   console.log(error.name);
//   console.log(error.message);
// }

// Secara sintaksis, kode di atas tidak menimbulkan eror, sehingga blok catch akan diabaikan. Namun, tidak adanya properti name pada json sebenarnya sama saja dengan eror karena akan berdampak pada jalannya program kita.

// #3
// const json = '{ bad }';
// const json = '{ "age": 20 }';
// const json = '{ "name": "Yoda", "age": 20 }';

// try {
//   const user = JSON.parse(json);

//   if (!user.name) {
//     throw new SyntaxError("'name' is required.");
//   }

//   console.log(user.name); // undefined
//   console.log(user.age); // 20
// } catch (error) {
//   //   console.log(`JSON Error: ${error.message}`);
//   if (error instanceof SyntaxError) {
//     console.log(`JSON Error Syntack`);
//     console.log(`JSON Error: ${error.message}`);
//   } else if (error instanceof ReferenceError) {
//     console.log('error.message');
//     console.log(error.message);
//   } else {
//     console.log('error.stack');
//     console.log(error.stack);
//   }
// }

/* output
JSON Error: 'name' is required.
*/

// #4
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ValidationError';
  }
}

const json = '{ "age": 30 }';
// const json = '{ bad}';

try {
  const user = JSON.parse(json);

  if (!user.name) {
    throw new ValidationError("'name' is required.");
  }
  if (!user.age) {
    throw new ValidationError("'age' is required.");
  }

  console.log(user.name);
  console.log(user.age);
} catch (error) {
  if (error instanceof SyntaxError) {
    console.log(`JSON Syntax Error: ${error.message}`);
  } else if (error instanceof ValidationError) {
    console.log(`Invalid data: ${error.message}`);
  } else if (error instanceof ReferenceError) {
    console.log(error.message);
  } else {
    console.log(error.stack);
  }
}
