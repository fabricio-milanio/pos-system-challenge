import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Address extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public number: number

  @column()
  public street: string

  @column()
  public district: string

  @column()
  public city: string

  @column()
  public state: string

  @column()
  public country: string

  @column()
  public zipCode: string

  @column()
  public clientId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
