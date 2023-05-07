const { withDrawMoney, buyCinemaTicket, goInsideCinema } = require('./util');
async function watchMovie() {
  try {
    const money = await withDrawMoney(10);
    const ticket = await buyCinemaTicket(money);
    const result = await goInsideCinema(ticket);

    console.log(result);
  } catch (error) {
    console.log(error.message);
  }
}

watchMovie(80).then(() => console.log('done'));

// const { withDrawMoney, buyCinemaTicket, goInsideCinema } = require('./util');

// async function watchMovie(amount) {
//   try {
//     const money = await withDrawMoney(amount);
//     const ticket = await buyCinemaTicket(money);
//     const result = await goInsideCinema(ticket);

//     return result;
//   } catch (error) {
//     throw error;
//   }
// }

// watchMovie(10);
// .then((result) => console.log(result)) // enjoy the movie
// .catch((error) => console.log(error.message));

// watchMovie(5);
// .then((result) => console.log(result))
// .catch((error) => console.log(error.message)); // not enough money to buy ticket
