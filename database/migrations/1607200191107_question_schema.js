'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class QuestionSchema extends Schema {
  up () {
    this.create('questions', (table) => {
      table.increments()
      table.string('description', 300).notNullable().unique()
      table
        .integer('quiz_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('quizzes')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.timestamps()
    })
  }

  down () {
    this.drop('questions')
  }
}

module.exports = QuestionSchema
