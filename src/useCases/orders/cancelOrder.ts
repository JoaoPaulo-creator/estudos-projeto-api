import { Request, Response } from "express";
import { Orders } from "../../models/Orders";

export async function cancelOrder(req: Request, res: Response) {
    try {
        const { orderId } = req.params
        await Orders.findByIdAndDelete(orderId)
        return res.sendStatus(204)
    } catch (error) {
        console.error(error)
        return res.status(500).json({ error: 'Erro ao tentar cancelar pedido'})
    }
}
