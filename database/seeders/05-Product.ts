import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Product from 'App/Models/Product'

export default class extends BaseSeeder {
  public async run() {
    await Product.createMany([
      {
        name: 'Product 1',
        description: 'Description 1',
        author: 'Author 1',
        publisher: 'Publisher 1',
        price: 1.99,
        stock: 100,
      },
      {
        name: 'Product 2',
        description: 'Description 2',
        author: 'Author 2',
        publisher: 'Publisher 2',
        price: 2.99,
        stock: 100,
      },
      {
        name: 'Product 3',
        description: 'Description 3',
        author: 'Author 3',
        publisher: 'Publisher 3',
        price: 3.99,
        stock: 100,
      },
    ])
  }
}
