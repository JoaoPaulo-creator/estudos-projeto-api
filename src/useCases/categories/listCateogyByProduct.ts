import { Request, Response } from 'express'
import { Product } from '../../models/Product'

export async function listProductsByCategory(req: Request, res: Response) {
  try {
    const { categoryId } = req.params
    const product = await Product.find().where('categoryId').equals(categoryId)
    return res.status(200).json(product)
  } catch (error) {
    return res
      .status(500)
      .json({
        error: `Um erro ocorreu ao tentar consultar produto por categoria: ${error}`,
      })
  }
}
