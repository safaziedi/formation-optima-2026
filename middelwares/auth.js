const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1]; // Récupère le token du "Bearer TOKEN"
        const decodedToken = jwt.verify(token, "oknhgvgijnkazertyuioqsdfghjkl");
        req.user = decodedToken; // On injecte les données du token dans la requête
        next();
    } catch (error) {
        res.status(401).json({ error: 'Requête non authentifiée !' });
    }
};