import { Request, Response } from "express";
import { Product } from "../../models/Product";

export async function createProduct(req: Request, res: Response) {
    try {
        const imagePath = req.file?.filename
        const { name, description, price, categoryId, ingredients } = req.body

        const product = await Product.create({
            name,
            description,
            imagePath,
            price: Number(price),
            categoryId,
            ingredients: ingredients ? JSON.parse(ingredients) : []
        })

        return res.status(201).json(product)

    } catch (error) {
        return res.status(500).json({ error: `Um erro aconteceu ao tentar cadastrar um novo produto: ${error}`})
    }
}
