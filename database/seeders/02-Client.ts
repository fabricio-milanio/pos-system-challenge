import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Client from 'App/Models/Client'

export default class extends BaseSeeder {
  public async run() {
    await Client.createMany([
      {
        name: 'John Doe',
        cpf: '12345678900',
      },
      {
        name: 'Jane Doe',
        cpf: '12345678901',
      },
      {
        name: 'Johnny Doe',
        cpf: '12345678902',
      },
    ])
  }
}
