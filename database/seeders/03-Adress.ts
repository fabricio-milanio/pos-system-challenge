import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Address from 'App/Models/Address'

export default class extends BaseSeeder {
  public async run() {
    await Address.createMany([
      {
        number: 123,
        street: 'Richmond Street',
        district: 'South Beach',
        city: 'Richmond',
        state: 'Virginia',
        country: 'United States',
        zipCode: '12345-678',
        clientId: 1,
      },
      {
        number: 456,
        street: 'Green Street',
        district: 'North Beach',
        city: 'London',
        state: 'England',
        country: 'United Kingdom',
        zipCode: '67890-123',
        clientId: 2,
      },
      {
        number: 789,
        street: 'Sky Street',
        district: 'East Beach',
        city: 'Sydney',
        state: 'New South Wales',
        country: 'Australia',
        zipCode: '54321-876',
        clientId: 3,
      },
    ])
  }
}
