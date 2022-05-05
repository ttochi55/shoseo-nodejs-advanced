const crypto = require('crypto');

module.exports = {
  // SHA: Secure Hash Algorithm
  generateHash: (str) => {
    let sha256 = crypto.createHash('sha256'); // sha256, sha512
    sha256.update(str);
    return sha256.digest('base64'); // hex, base64
  },
  isLoggedIn: (request, response, next) => {
    if (!request.session.uid) {
      response.redirect('/login');
    } else {
      next();
    }
  },
};
