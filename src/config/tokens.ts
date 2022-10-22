const jwt = require("jsonwebtoken");

export const generateToken = (payload) => {
    const token = jwt.sign({user: payload}, process.env.SECRET, {expiresIn: "2d"})
    return token;
};

export const validateToken = (token) => {
    return jwt.verify(token, process.env.SECRET)
};

export default {generateToken, validateToken};