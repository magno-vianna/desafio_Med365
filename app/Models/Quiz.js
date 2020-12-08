'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Quiz extends Model {
  user () {
    return this.belongsTo('App/Models/User')
  }

  questions () {
    return this.hasMany('App/Models/Question')
  }
}

module.exports = Quiz
