const jwt = require('jsonwebtoken');

const SECRET_KEY = process.env.JWT_SECRET_KEY;

exports.getJWTToken = (json) => {
    return jwt.sign(json, SECRET_KEY);
}

exports.getObjectFromJWT = (token) => {
    return jwt.verify(token, SECRET_KEY);
}
