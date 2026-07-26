import jwt from 'jsonwebtoken';

export function generateAuthToken(user) {
    const playload = {
        id: user.id,
        email: user.email
    };

    const token = jwt.sign(playload, process.env.JWT_SECRET, { expiresIn: '1h' });

    return token;
}