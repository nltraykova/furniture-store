import { Router } from "express";
import { createFurnitureSchema } from "../schemas/furniture.schema";
import furnitureService from "../services/furniture.service";
import { getErrorMessage } from "../utils/errorUtils";
import { isAuth } from "../middleware/ath.middleware";
import querystring from "querystring";

const furnitureController = Router();

furnitureController.get('/catalog', async (req, res) => {
    let filter = {};

    if(req.query.where) {
        const result = querystring.parse(req.query.where.replaceAll('"', ''));

        filter.userId = result._ownerId;
    };
    
    const furnitures = await furnitureService.getAll(filter);

    res.json(furnitures);
});

furnitureController.post('/catalog', isAuth, async (req, res) => {
    try {
        const furnitureData = createFurnitureSchema.parse(req.body);
        const userId = req.user.id;

        const newFurniture = await furnitureService.create(furnitureData, userId);

        res.json({ message: 'Furniture created', furniture: newFurniture });
    } catch (error) {
        const errorMessage = getErrorMessage(error);

        res.status(400).json({ message: errorMessage })
    };
});

furnitureController.get('/catalog/:furnitureId', async (req, res) => {
    const furnitureId = req.params.furnitureId;

    const furniture = await furnitureService.getById(furnitureId);

    res.json(furniture);
});

furnitureController.put('/catalog/:furnitureId', isAuth, async (req, res) => {
    const furnitureId = req.params.furnitureId;
    const userId = req.user.id;

    try {
        const furnitureData = await createFurnitureSchema.parse(req.body);
        const updatedFurniture = await furnitureService.update(furnitureId, userId, furnitureData);

        res.json({ message: 'Furniture updated', furniture: updatedFurniture });
    } catch (error) {
        const errorMessage = getErrorMessage(error);

        res.status(400).json({ message: errorMessage });
    }
});

furnitureController.delete('/catalog/:furnitureId', isAuth, async (req, res) => {
    const furnitureId = req.params.furnitureId;
    const userId = req.user.id;

    const furniture = await furnitureService.getById(furnitureId);

    if (!furniture) {
        return res.status(404).json({ message: 'Furniture not found'});
    };

    if (furniture.userId !== userId) {
        return res.status(403).json({ message: 'You are not authorized to delete this furniture'});
    };

    try {
        await furnitureService.remove(furnitureId, userId);
        
        res.json({ message: 'Furniture deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting furniture'});
    }
});


export default furnitureController;