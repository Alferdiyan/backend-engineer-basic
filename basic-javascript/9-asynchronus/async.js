function getUsers(isOffline) {
  //return a promise object
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const users = ['jhon', 'jack', 'abigail'];

      if (isOffline) {
        reject(new Error('raiso buka amargo offline'));
        return;
      }

      resolve(users);
    }, 3000);
  });
}

getUsers(true)
  .then((users) => console.log(users))
  .catch((err) => console.log(err.message));
