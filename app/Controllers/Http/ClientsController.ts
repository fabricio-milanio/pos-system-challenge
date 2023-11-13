import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Client from 'App/Models/Client'
import ClientValidator from 'App/Validators/ClientValidator'

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

    if (client.length === 0) {
      return response.status(404).json({ message: 'Client not found' })
    }

    return response.json(client)
  }

  public async store({ request, response }: HttpContextContract) {
    await request.validate(ClientValidator)

    const data = request.only(['name', 'cpf'])

    const { id, name, cpf } = await Client.create(data)

    return response.status(201).json({ id, name, cpf })
  }
}
