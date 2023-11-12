import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ProductValidator {
  constructor(protected ctx: HttpContextContract) {}

  /*
   * Define schema to validate the "shape", "type", "formatting" and "integrity" of data.
   *
   * For example:
   * 1. The username must be of data type string. But then also, it should
   *    not contain special characters or numbers.
   *    ```
   *     schema.string([ rules.alpha() ])
   *    ```
   *
   * 2. The email must be of data type string, formatted as a valid
   *    email. But also, not used by any other user.
   *    ```
   *     schema.string([
   *       rules.email(),
   *       rules.unique({ table: 'users', column: 'email' }),
   *     ])
   *    ```
   */
  public schema = schema.create({
    name: schema.string([rules.unique({ table: 'products', column: 'name' })]),
    description: schema.string(),
    author: schema.string(),
    publisher: schema.string(),
    price: schema.number([rules.unsigned(), rules.notIn([0])]),
    stock: schema.number([rules.unsigned(), rules.notIn([0])]),
  })

  /**
   * Custom messages for validation failures. You can make use of dot notation `(.)`
   * for targeting nested fields and array expressions `(*)` for targeting all
   * children of an array. For example:
   *
   * {
   *   'profile.username.required': 'Username is required',
   *   'scores.*.number': 'Define scores as valid numbers'
   * }
   *
   */
  public messages: CustomMessages = {
    'name.required': 'Name is required',
    'name.unique': 'Name is already in use',
    'description.required': 'Description is required',
    'author.required': 'Author is required',
    'publisher.required': 'Publisher is required',
    'price.required': 'Price is required',
    'price.notIn': 'Price must be greater than 0',
    'price.unsigned': 'Price must be greater than 0',
    'stock.required': 'Stock is required',
    'stock.notIn': 'Stock must be greater than 0',
    'stock.unsigned': 'Stock must be greater than 0',
  }
}
