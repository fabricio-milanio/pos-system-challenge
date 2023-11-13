import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Product from 'App/Models/Product'
import Sale from 'App/Models/Sale'
import SaleValidator from 'App/Validators/SaleValidator'

export default class SalesController {
  public async store({ request, response }: HttpContextContract) {
    await request.validate(SaleValidator)

    const saleRequest = request.all()

    const product = await Product.findOrFail(saleRequest.product_id)

    if (saleRequest.quantity > product.stock) {
      return response.status(400).json({ message: 'Insufficient stock' })
    }

    product.stock = product.stock - saleRequest.quantity

    await product.save()

    const totalPrice = product.price * saleRequest.quantity

    const sale = {
      client_id: saleRequest.client_id,
      product_id: saleRequest.product_id,
      quantity: saleRequest.quantity,
      price: product.price,
      total_price: totalPrice,
    }

    const registerSale = await Sale.create(sale)

    return response.status(201).json(registerSale)
  }
}
