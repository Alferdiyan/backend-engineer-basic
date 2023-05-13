// test('deskripsi dari testcase kamu', () => {
//     expect(perintah).matcher(nilai yang diekspektasikan);
// });

// // contoh
// test('dua tambah dua adalah empat', () => {
//     expect(2+2).toBe(4);
// });
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
