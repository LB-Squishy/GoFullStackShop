const jsonwebtoken = require("jsonwebtoken");

// Middleware qui vérifie la validité du token, extrait les valeurs et transmet
module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decodedToken = jsonwebtoken.verify(token, "RANDOM_TOKEN_SECRET");
        const userId = decodedToken.userId;
        req.auth = {
            userId: userId
        };
    } catch(error) {
        res.status(401).json({error})
    }
}