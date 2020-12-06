'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserAnswerRegisterSchema extends Schema {
  up () {
    this.create('user_answer_registers', (table) => {
      table.increments()
      table
        .integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table
        .integer('quiz_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('quizzes')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table
        .integer('question_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('questions')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table
        .integer('answer_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('answers')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.timestamps()
    })
  }

  down () {
    this.drop('user_answer_registers')
  }
}

module.exports = UserAnswerRegisterSchema
