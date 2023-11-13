import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Client from 'App/Models/Client'

export default class ClientsController {
  public async index({ response }: HttpContextContract) {
    const clients = await Client.query().select('id', 'name', 'cpf')

    return response.json(clients)
  }

  public async show({ params, response }: HttpContextContract) {
    const data = await Client.query()
      .select('id', 'name', 'cpf')
      .preload('addresses')
      .preload('phones')
      .where('id', params.id)

    const client = data.map((client) => {
      return {
        id: client.id,
        name: client.name,
        cpf: client.cpf,
        addresses: client.addresses.map((address) => {
          return {
            number: address.number,
            street: address.street,
            district: address.district,
            city: address.city,
            state: address.state,
            country: address.country,
            zipCode: address.zipCode,
          }
        }),
        phones: client.phones.map((phone) => {
          return {
            number: phone.number,
          }
        }),
      }
    })

    return response.json(client)
  }
}
