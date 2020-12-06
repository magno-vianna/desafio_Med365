'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class UserAnswerRegister extends Model {
  user () {
    return this.belongsTo('App/Models/User')
  }

  quiz () {
    return this.belongsTo('App/Models/Quiz')
  }

  questions () {
    return this.belongsTo('App/Models/Question')
  }

  answers () {
    return this.belongsTo('App/Models/Answers')
  }
}

module.exports = UserAnswerRegister
