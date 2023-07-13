import { Request, Response } from 'express'
import { Orders } from '../../models/Orders'

export async function createOrder(req: Request, res: Response) {
  try {
    const { table, products } = req.body
    const createOrder = await Orders.create({ table, products })

    return res.json(createOrder)
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: 'Erro ao tentar criar pedido' })
  }
}
