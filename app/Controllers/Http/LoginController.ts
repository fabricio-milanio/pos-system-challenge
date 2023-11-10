// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import LoginValidator from 'App/Validators/LoginValidator'
import Hash from '@ioc:Adonis/Core/Hash'
import User from 'App/Models/User'

export default class LoginController {
  public async login({ auth, request, response }) {
    const email = request.input('email')
    const password = request.input('password')

    await request.validate(LoginValidator)

    try {
      const user = await User.findByOrFail('email', email)

      if (!(await Hash.verify(user.password, password))) {
        return response.unauthorized({ message: 'Invalid credentials' })
      }

      const { token } = await auth.use('api').generate(user, {
        expiresIn: '8hours',
      })

      return response.json({
        token,
      })
    } catch {
      return response.badRequest('Invalid credentials')
    }
  }
}
