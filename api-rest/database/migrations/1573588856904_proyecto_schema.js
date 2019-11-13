'use strict'

const Schema = use('Schema')

class ProyectoSchema extends Schema {
  up () {
    this.create('proyectos', (table) => {
      table.increments()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.string('nombre', 80).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('proyectos')
  }
}

module.exports = ProyectoSchema
