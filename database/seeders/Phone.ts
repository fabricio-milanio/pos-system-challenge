import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Phone from 'App/Models/Phone'

export default class extends BaseSeeder {
  public async run() {
    await Phone.createMany([
      {
        number: '123456789',
        clientId: 1,
      },
      {
        number: '987654321',
        clientId: 2,
      },
      {
        number: '654789321',
        clientId: 3,
      },
    ])
  }
}
