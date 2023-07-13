import { Request, Response } from 'express'
import { Orders } from '../../models/Orders'

export async function listOrders() {
  try {
    const orders = await Orders.find()
      .sort({ createdAt: 1 })
      .populate('products.product')
    return { orders }
  } catch (error) {
    console.error(error)
    return { error: 'Erro ao tentar consultar lista de produtos' }
  }
}
