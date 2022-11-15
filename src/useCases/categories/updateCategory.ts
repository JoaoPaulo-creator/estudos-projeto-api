import { Request, Response } from "express";
import { Category } from "../../models/Category";

export async function updateCaregory(req: Request, res: Response) {
    const categoryId = req.params.id
    const data = req.body

    const findCategory = await Category.findById( categoryId )

    try {
        if(!findCategory){
            return res.status(404).json({ message: 'Categoria não encontrada'})
        }

        const updatedcategory = await Category.updateOne({ _id: categoryId }, data)
        return res.status(200).json( findCategory )
    } catch (error) {
        console.error(error)
    }
}
