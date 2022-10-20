var validateToken = require("../config/tokens").validateToken;
function validateAuth(req, res, next) {
    var token = req.cookies.token;
    if (!token)
        return res.sendStatus(401);
    var user = validateToken(token).user;
    if (!user)
        return res.sendStatus(401);
    req.user = user;
    next();
}
module.exports = { validateAuth: validateAuth };
