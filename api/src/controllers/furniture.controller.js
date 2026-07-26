import { Router } from "express";

const furnitureController = Router();

furnitureController.get('/catalog', (req, res) => {
    const furnitures = [];

    res.json(furnitures);
});


export default furnitureController;