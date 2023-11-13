import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class extends BaseSeeder {
  public async run() {
    await User.createMany([
      {
        email: 'fabricio@email.com',
        password: '123456',
      },
      {
        email: 'be@email.tech',
        password: '123abc',
      },
    ])
  }
}
