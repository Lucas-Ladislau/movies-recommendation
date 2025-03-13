const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1]; // Extrai o token do header

    if (!token) {
        return res.status(401).json({ message: "Access denied. No token provided." });
    }

    try {
        const decoded = jwt.verify(token, "chave-secreta"); // Verifica o token
        req.user = decoded; // Armazena os dados do usuário na requisição
        next(); // Permite a continuação da requisição
    } catch (error) {
        return res.status(401).json({ message: "Invalid token." });
    }
};

module.exports = verifyToken;