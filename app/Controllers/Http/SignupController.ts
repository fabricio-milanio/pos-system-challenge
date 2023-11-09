import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import User from 'App/Models/User'
import SignupValidator from 'App/Validators/SignupValidator'

export default class SignupController {
  public async store({ request, response }: HttpContextContract) {
    await request.validate(SignupValidator)

    const { email, password } = request.all()

    await User.create({ email, password })

    return response.status(201).json({ message: 'User account created' })
  }
}
