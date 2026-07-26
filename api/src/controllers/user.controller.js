import { Router } from "express";

const userController = Router();

userController.post('/register', (req, res) => {
    const user = req.body;
    
});

export default userController;