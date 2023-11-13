import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Sale from 'App/Models/Sale'

export default class extends BaseSeeder {
  public async run() {
    await Sale.createMany([
      {
        client_id: 1,
        product_id: 1,
        quantity: 1,
        price: 1.99,
        total_price: 1.99,
      },
      {
        client_id: 2,
        product_id: 2,
        quantity: 2,
        price: 2.99,
        total_price: 5.98,
      },
      {
        client_id: 3,
        product_id: 3,
        quantity: 3,
        price: 3.99,
        total_price: 11.97,
      },
    ])
  }
}
