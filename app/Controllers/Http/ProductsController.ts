import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Product from 'App/Models/Product'

export default class ProductsController {
  public async index({ response }: HttpContextContract) {
    const data = await Product.all()

    const products = data.map((product) => {
      return {
        id: product.id,
        name: product.name,
        description: product.description,
        author: product.author,
        publisher: product.publisher,
        price: product.price,
        stock: product.stock,
      }
    })

    return response.json(products)
  }
}
