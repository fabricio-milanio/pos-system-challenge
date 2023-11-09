import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import User from 'App/Models/User'

export default class SignupController {
  public async store({ request, response }: HttpContextContract) {
    const { email, password } = request.all()

    const user = await User.create({ email, password })

    return response.status(201).json(user)
  }
}
