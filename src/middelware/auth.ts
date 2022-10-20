const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET

const genToken = (payload: {}) => {
    const token = jwt.sign({user: payload}, SECRET, {expiresIn: "2d"})
    return token;
};

const valToken = (token: string) => {
    return jwt.verify(token, SECRET)
};
export default {genToken, valToken};