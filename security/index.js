const CryptoJS = require("crypto-js");

const SECRET_KEY = process.env.SECRET_KEY;

exports.encryptText = (text) => {
    return CryptoJS.AES.encrypt(text, SECRET_KEY).toString();
}

exports.decryptText = (ciphertext) => {
    const bytes = CryptoJS.AES.decrypt(ciphertext, SECRET_KEY);
    return bytes.toString(CryptoJS.enc.Utf8);
}
