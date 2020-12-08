'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Question extends Model {
  quiz () {
    return this.belongsTo('App/Models/Quiz')
  }

  answers () {
    return this.hasMany('App/Models/Answer')
  }
}

module.exports = Question
