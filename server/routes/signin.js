const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

router.post('/', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: 'User not found', success: false });
        }

        const isMatched = await bcrypt.compare(password, user.password);
        
        if (!isMatched) {
            return res.status(400).json({ message: 'Incorrect password', success: false });
        }

        // Gerar o token JWT
        const token = jwt.sign(
            { id: user._id, name: user.name },
            "chave-secreta", // Substitua por uma chave segura
            { expiresIn: "1h" }
        );

        res.status(200).json({
            message: 'Login successful',
            success: true,
            token,
            createdUser: { name: user.name, _id: user._id }
        });

    } catch (error) {
        console.error("Erro no login:", error);
        res.status(500).json({ message: "Internal server error", success: false });
    }
});

module.exports = router;