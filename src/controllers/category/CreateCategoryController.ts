import { Request, Response } from 'express'
import { createCaregory } from '../../useCases/categories/createCategory'

export async function CreateCategoryController(req: Request, res: Response) {
  const bodyRequest = req.body

  if (!bodyRequest.icon) {
    return res.status(400).json({ error: 'Icon is required' })
  }

  if (!bodyRequest.name) {
    return res.status(400).json({ error: 'Name is required' })
  }

  const { category }: any = await createCaregory(bodyRequest)
  return res.status(201).json(category)
}
