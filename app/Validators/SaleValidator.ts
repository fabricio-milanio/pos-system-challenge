import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class SaleValidator {
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
    client_id: schema.number([rules.exists({ table: 'clients', column: 'id' })]),
    product_id: schema.number([rules.exists({ table: 'products', column: 'id' })]),
    quantity: schema.number([rules.unsigned(), rules.notIn([0])]),
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
    'client_id.required': 'client_id is required',
    'client_id.exists': 'Client does not exists',
    'product_id.required': 'product_id is required',
    'product_id.exists': 'Product does not exists',
    'quantity.required': 'quantity is required',
    'quantity.notIn': 'quantity must be greater than 0',
  }
}
