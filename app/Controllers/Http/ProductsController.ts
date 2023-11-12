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

  public async show({ params, response }: HttpContextContract) {
    try {
      const product = await Product.findOrFail(params.id)

      return response.json(product)
    } catch (error) {
      return response.status(404).json({ message: 'Product not found' })
    }
  }
}
