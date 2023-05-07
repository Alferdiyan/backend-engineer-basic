function withDrawMoney(amount) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (amount > 100) {
        reject(new Error('Not enough money to withdraw'));
      }

      resolve(amount);
    }, 1000);
  });
}

function buyCinemaTicket(money) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (money < 10) {
        reject(new Error('not enough money to buy ticket'));
      }

      resolve('ticket-1');
    }, 1000);
  });
}

function goInsideCinema(ticket) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!ticket) {
        reject(new Error('no ticket'));
      }

      resolve('enjoy the movie1');
    }, 1000);
  });
}

function watchMovie() {
  withDrawMoney(1000)
    .then((money) => {
      console.log(`ambil duit ${money}`);
      return buyCinemaTicket(money);
    })
    .then((ticket) => {
      console.log(`beli ${ticket}`);
      return goInsideCinema(ticket);
    })
    .then((result) => {
      console.log;
      console.log(result);
    })
    .catch((error) => {
      console.log(error.message);
    });
}

watchMovie();
