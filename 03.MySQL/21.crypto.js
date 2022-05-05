const filename = process.argv[1];
const crypto = require('crypto');
const fs = require('fs');

let hash, output;

// SHA: Secure Hash Algorithm
// HEX: 64byte
hash = crypto.createHash('sha256'); // sha256, sha512
hash.update('crypto_hash');
output = hash.digest('hex'); // hex, base64

console.log('crypto_hash: ', output);
console.log(output.length);

// SHA: Secure Hash Algorithm
// BASE64: 44byte
hash = crypto.createHash('sha256'); // sha256, sha512
hash.update('crypto_hash');
output = hash.digest('base64'); // hex, base64

console.log('crypto_hash: ', output);
console.log(output.length);

// const input = fs.createReadStream(filename);
// input.on('readable', () => {
//   let data = input.read();
//   if (data) {
//     hash.update(data);
//   } else {
//     console.log(`${hex} ${filename}`);
//   }
// });
