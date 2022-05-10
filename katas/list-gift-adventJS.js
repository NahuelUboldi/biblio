const carta =
  '  bici coche       balón     _playstation    bici coche    peluche';

function listGifts(letter) {
  const object = {};
  letter
    .trim()
    .replace(/\s+/g, ' ')
    .split(' ')
    .forEach((word) => {
      if (word[0] === '_') return;
      object[word] ? (object[word] += 1) : (object[word] = 1);
    });
  return object;
}

listGifts(carta);
