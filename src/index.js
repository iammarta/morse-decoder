const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

let space = {
  '**********': ' '
};
for (let key of Object.keys(MORSE_TABLE)) {
  let change = key.replace(/-/g, '11').replace(/\./g, '10').padStart(10, '00');
  space[change] = MORSE_TABLE[key];
}

function decode(expr) {
  let arr = expr.match(/.{10}/g);

  let result = arr.map(function (elem) {
    let item = space[elem];
    return item;
  }).join('');
  return result;
}

module.exports = {
    decode
}
