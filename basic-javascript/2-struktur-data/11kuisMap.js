// /**
//  * TODO:
//  * 1. Buatlah variabel currency yang merupakan Map dengan kriteria:
//  *   - key "USD", value 14000
//  *   - key "JPY", value 131
//  *   - key "SGD", value 11000
//  *   - key "MYR", value 3500
//  * 2. Buatlah variabel priceInIDR yang bernilai dari hasil perkalian:
//  *     - priceInJPY dengan nilai currency JPY
//  */

// const priceInJPY = 5000;

// // TODO
// const currency = new Map([
//   ['USD', 14000],
//   ['JPY', 131],
//   ['SGD', 11000],
//   ['MYR', 3500],
// ]);

// console.log(currency);
// const priceInIDR = priceInJPY * currency.get('JPY');
// console.log(priceInIDR);
// /**
//  * Jangan hapus kode di bawah ini
//  */
// module.exports = { currency, priceInJPY, priceInIDR };

// // https://youtu.be/etDR8rc_vvs
// const artistsAndSongs = {
//   Keyakizaka46: ['Silent Majority'],
//   Blackpink: ['How You Like That', 'Ice Cream'],
//   JKT48: ['Rapsodi', 'Heavy Rotation'],
//   Twice: ['What is Love?'],
// };

// artistsAndSongs['Babymetal'] = ['Gimme chocolate'];

// console.log(artistsAndSongs);
// delete artistsAndSongs['Keyakizaka46'];

// console.log(artistsAndSongs);
// console.log('');

const oneTwoThree = [1, 2, 3];
const sevenEightNine = [7, 8, 9];

const result = [4, 5, 6, ...oneTwoThree, ...sevenEightNine];

console.log(result);
