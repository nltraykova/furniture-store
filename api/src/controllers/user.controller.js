import { Router } from 'express';

import { userSchema } from '../schemas/user.schema.js';
import userService from '../services/user.service.js';
import { generateAuthToken } from '../utils/tokenUtils.js';
import { getErrorMessage } from '../utils/errorUtils.js';



const userController = Router();

userController.post('/register', async (req, res) => {
    try {
        const userData = await userSchema.parseAsync(req.body);

        const user = await userService.register(userData);

        const token = generateAuthToken(user);

        res.json({
            _id: user.id,
            email: user.email,
            accessToken: token
        });
    } catch (error) {
        const errorMessage = getErrorMessage(error);

        res.status(400).json({ error: errorMessage })
    };
});

userController.post('/login', async (req, res) => {
    const { email, password } = req.body;
    
    try {
        const user = await userService.login(email, password);

        const token = generateAuthToken(user);

        res.json({
            _id: user.id,
            email: user.email,
            accessToken: token
        });
    } catch (error) {
        const errorMessage = getErrorMessage(error);

        res.status(400).json({ error: errorMessage });
    };
});

userController.get('/logout', (req, res) => {
    const token = req.headers['x-authorization'];

    if (!token) {
        res.status(400).json({ error: 'No token provided' })
    };

    res.json({ message: 'Logout successful' });
});

export default userController;