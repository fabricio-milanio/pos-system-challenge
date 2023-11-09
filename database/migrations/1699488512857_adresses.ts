import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'adresses'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('number').notNullable()
      table.string('street').notNullable()
      table.string('district').notNullable()
      table.string('city').notNullable()
      table.string('state').notNullable()
      table.string('country').notNullable()
      table.string('zip_code').notNullable()
      table.integer('client_id').unsigned().references('id').inTable('clients').onDelete('CASCADE')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
