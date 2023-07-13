import { Request, Response } from 'express'
import { listOrders } from '../../useCases/orders/listOrders'

export async function ListOrdersControllers(req: Request, res: Response) {
  const { orders } = await listOrders()
  return res.status(200).json(orders)
}
