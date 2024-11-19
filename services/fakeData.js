function generateLottery(id) {
  const expiresIn = getRandomInt(7, 30);
  const expiresAt = new Date(Date.now() + expiresIn * 24 * 60 * 60 * 1000);
  return {
    id,
    title: `lottery ${id}`,
    description: `This is the ${id} lottery`,
    owner: generateRandomEthereumAddress(),
    prize: getRandomFloat(10, 100).toFixed(2),
    ticketPrize: getRandomFloat(0.01, 0.1).toFixed(2),
    // image: `https://picsum.photos/200/300?random=${id}`,
    createdAt: new Date().toISOString(),
    drawsAt: new Date().toISOString(),
    expiresIn,
    expiresAt,
    participants: getRandomInt(10, 100),
    drawn: false,
  };
}
function generateRandomEthereumAddress() {
  const hexChars = "0123456789abcdef";
  let address = "0x";
  for (let i = 0; i < 40; i++) {
    address += hexChars.charAt[Math.floor(Math.random() * hexChars.length)];
  }
  return address;
}

function generateLotteryParticipants(count) {
  const participants = [];
  const accounts = generateRandomEthereumAddress();
  for (let i = 0; i < count; i++) {
    const participant = {
      account: accounts[Math.floor(Math.random() * accounts.length)],
      lotteryNumber: Math.random().toString(36).substring(2, 8),
      paid: false,
    };
    participants.push(participant);
  }
  return participants;
}

function getPurchasedNumbers(count) {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const result = [];
  for (let i = 0; i < count; i++) {
    let string = "";
    for (let j = 0; j < 6; j++) {
      string += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    result.push(string);
  }
  return result;
}

const generateFakeLotteries = (n) => {
  const lotteries = [];
  for (let i = 0; i < n; i++) {
    const id = i.toString();
    const title = `lottery ${id}`;
    const description = `This is the ${i} lottery`;
    const owner = generateRandomEthereumAddress();
    const prize = getRandomFloat(10, 100).toFixed(2);
    const ticketPrize = getRandomFloat(0.01, 0.1).toFixed(2);
    // const image = `https://picsum.photos/200/300?random=${id}`;
    const createdAt = new Date().toISOString();
    const drawsAt = new Date().toISOString();
    const expiresIn = getRandomInt(7, 30);
    const expiresAt = new Date(
      Date.now() + expiresIn * 24 * 60 * 60 * 1000
    ).toISOString();
    const participants = getRandomInt(10, 100);
    const drawn = false;
    lotteries.push({
      id,
      title,
      description,
      owner,
      prize,
      ticketPrize,
      createdAt,
      expiresIn,
      expiresAt,
      participants,
      drawn,
      drawsAt,
    });
  }
  return lotteries;
};

function getRandomFloat(min, max) {
  return Math.random() * (max - min) + min;
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export {
  generateFakeLotteries,
  generateRandomEthereumAddress,
  generateLottery,
  generateLotteryParticipants,
  getPurchasedNumbers,
};
