import { Request, Response } from "express";
import { Category } from "../../models/Category";

export async function createCaregory(req: Request, res: Response) {
    const {icon, name} = req.body
    const createCategory = await Category.create({ icon, name })
    return res.json(createCategory)
}
