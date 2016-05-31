function linkGen() {
  var slug = '';
  var slugArray = [];
  var chars = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
  'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
  'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];

  var charIndex = 0;
  for (var i = 0; i < 4; i++) {
    charIndex = getRandomIntInclusive(0, chars.length - 1);
    slugArray.push(chars[charIndex]);
  }
  slug = slugArray.join('');
  return slug;
}

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = linkGen();
