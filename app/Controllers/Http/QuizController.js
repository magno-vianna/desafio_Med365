'use strict'

const Quiz = use('App/Models/Quiz')

class QuizController {
  async create ({ request, response }) {
    try {
      const body = request.all()
      if (!body || !body.name) throw new Error('Name parameter is required')
      const quiz = await Quiz.create({ name: body.name, user_id: 1 })
      return quiz
    } catch (error) {
      response.status(400).send(error.message)
    }
  }

  async index () {
    const quizzes = await Quiz.all()
    return quizzes
  }
}

module.exports = QuizController
