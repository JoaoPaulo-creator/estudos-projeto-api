import { Request, Response } from "express";
import { Orders } from "../../models/Orders";

export async function listOrders(req: Request, res: Response) {
    try {

        const orders = await Orders.find()
            .sort({ createdAt: 1 })
            .populate('products.product')
        return res.json(orders)

    } catch (error) {
        console.error(error)
        return res.status(500).json({ error: 'Erro ao tentar consultar lista de produtos'})
    }
}