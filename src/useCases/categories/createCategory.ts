import { Request, Response } from "express";
import { Category } from "../../models/Category";

export async function createCaregory(req: Request, res: Response) {
    try {

        const {icon, name} = req.body
        const createCategory = await Category.create({ icon, name })
        return res.json(createCategory)

    } catch (error) {
        console.error(error)
        return res.status(500).json({ error: 'Erro ao tentar cadastrar categoria'})
    }
}
