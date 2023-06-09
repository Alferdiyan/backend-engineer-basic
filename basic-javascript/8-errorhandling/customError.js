// let json = '{ "age": 30 }';

// try {
//   let user = JSON.parse(json);

//   if (!user.name) {
//     throw new SyntaxError("'name' is required.");
//   }

//   console.log(user.name);
//   console.log(user.age);
// } catch (error) {
//   if (error instanceof SyntaxError) {
//     console.log(`JSON Error: ${error.message}`);
//   } else if (error instanceof ReferenceError) {
//     console.log(error.message);
//   } else {
//     console.log(error.stack);
//   }
// }
class MyCustomError extends Error {
  constructor(message) {
    super(message);
    this.name = 'MyError';
  }
}

try {
  throw new MyCustomError('This is an error');
} catch (e) {
  console.log(e.message);
}
