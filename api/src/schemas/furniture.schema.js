import * as z from 'zod';

export const createFurnitureSchema = z.object({
    description: z.string()
        .min(10, { error: 'Description must be at least 10 characters long' }),
    img: z.url( { error: 'Image URL must be a valid URL' }),
    make: z.string()
        .min(4, { error: 'Make must be at least 4 characters long' }),
    material: z.string()
        .optional(),
    model: z.string()
        .min(4, { error: 'Model must be at least 4 characters long' }),
    price: z.coerce.number()
        .positive({ error: 'Price must be a positive number'}),
    year: z.coerce.number()
        .min(1950, { error: 'Year must be at least 1950' })
        .max(2050, { error: 'Year must be at most 2050' }),
});