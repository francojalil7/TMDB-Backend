const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET

const generateToken = (payload: {}) => {
    const token = jwt.sign({user: payload}, SECRET, {expiresIn: "2d"})
    return token;
};

const validateToken = (token: string) => {
    return jwt.verify(token, SECRET)
};

module.exports = {generateToken, validateToken};