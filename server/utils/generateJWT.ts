const jwt = require('jsonwebtoken');

const generateJWT = (id: string, username: string, email: string, role: string = 'Admin', picture?: string) => {
    return jwt.sign(
        {id, username, email, role, picture},
        process.env.JWT_SECRET_KEY,
        {expiresIn: "24h"}
    )
}

module.exports = generateJWT;