import { Router } from "express";
import { createFurnitureSchema } from "../schemas/furniture.schema";
import furnitureService from "../services/furniture.service";
import { getErrorMessage } from "../utils/errorUtils";
import { isAuth } from "../middleware/ath.middleware";

const furnitureController = Router();

furnitureController.get('/catalog', async (req, res) => {
    const furnitures = await furnitureService.getAll();

    res.json(furnitures);
});

furnitureController.get('/catalog/:furnitureId', async (req, res) => {
    const furnitureId = req.params.furnitureId;

    const furniture = await furnitureService.getById(furnitureId);

    res.json(furniture);
});

furnitureController.post('/catalog', isAuth, async (req, res) => {
    try {
        const furnitureData = createFurnitureSchema.parse(req.body);

        const newFurniture = await furnitureService.create(furnitureData);

        res.json({ message: 'Furniture created', furniture: newFurniture });
    } catch (error) {
        const errorMessage = getErrorMessage(error);

        res.status(400).json({ error: errorMessage })
    };
});


export default furnitureController;