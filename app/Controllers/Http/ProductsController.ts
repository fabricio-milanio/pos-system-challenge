import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Product from 'App/Models/Product'
import ProductValidator from 'App/Validators/ProductValidator'

export default class ProductsController {
  public async index({ response }: HttpContextContract) {
    const data = await Product.query().where('deleted', false)

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
      const product = await Product.query()
        .where('id', params.id)
        .andWhere('deleted', false)
        .firstOrFail()

      return response.json(product)
    } catch (error) {
      return response.status(404).json({ message: 'Product not found' })
    }
  }

  public async store({ request, response }: HttpContextContract) {
    await request.validate(ProductValidator)

    const data = request.only(['name', 'description', 'author', 'publisher', 'price', 'stock'])

    const product = await Product.create(data)

    return response.status(201).json({ message: 'Product registered successfully', data: product })
  }

  public async update({ params, request, response }: HttpContextContract) {
    await request.validate(ProductValidator)

    const data = request.only([
      'name',
      'description',
      'author',
      'publisher',
      'price',
      'stock',
      'deleted',
    ])

    try {
      const product = await Product.findOrFail(params.id)

      product.merge(data)

      await product.save()

      return response.json({ message: 'Product updated successfully', data: product })
    } catch (error) {
      return response.status(404).json({ message: 'Product not found' })
    }
  }
}
