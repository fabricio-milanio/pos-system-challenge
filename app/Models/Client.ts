import { DateTime } from 'luxon'
import { BaseModel, HasMany, column, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Address from './Address'
import Phone from './Phone'
import Sale from './Sale'

export default class Client extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public cpf: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => Address, {
    foreignKey: 'clientId',
  })
  public addresses: HasMany<typeof Address>

  @hasMany(() => Phone, {
    foreignKey: 'clientId',
  })
  public phones: HasMany<typeof Phone>

  @hasMany(() => Sale, {
    foreignKey: 'clientId',
  })
  public sales: HasMany<typeof Sale>
}
