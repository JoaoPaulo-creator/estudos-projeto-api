import { Request, Response } from 'express'
import { Orders } from '../../models/Orders'

export async function changeOrderStatus(req: Request, res: Response) {
  try {
    const { orderId } = req.params
    const { status } = req.body

    const statusArray = ['WAITING', 'IN_PRODUCTION', 'DONE']

    if (!statusArray.includes(status)) {
      return res
        .status(400)
        .json({
          error: 'Status do pedido deve ser WAITING, IN_PRODUCTION ou DONE',
        })
    }

    await Orders.findByIdAndUpdate(orderId, { status })
    return res.sendStatus(204)
  } catch (error) {
    console.error(error)
    return res
      .status(500)
      .json({ error: 'Erro ao tentar atualizar o status do pedido' })
  }
}
