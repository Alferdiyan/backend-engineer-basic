const { buyTollRoadCard, topUpBalance, useTollRoad } = require('./utils');

async function getTollAccess() {
  try {
    const card = await buyTollRoadCard(25);

    const updatedCard = await topUpBalance(card, 10);

    await useTollRoad(updatedCard);
  } catch (error) {
    console.log(error.message);
  }
}
// function getTollAccess() {
//   buyTollRoadCard(25)
//     .then((card) => {
//       console.log('Card purchased:', card);
//       return topUpBalance(card, 10);
//     })
//     .then((updatedCard) => {
//       console.log('Balance updated:', updatedCard);
//       return useTollRoad(updatedCard);
//     })
//     .then(() => {
//       console.log('Toll road used successfully!');
//       console.log('All steps completed successfully.');
//     })
//     .catch((error) => console.log(error.message));
// }

getTollAccess()
  .then(() => console.log('All steps completed successfully.'))
  .catch(() => console.log('Something went wrong.'));
