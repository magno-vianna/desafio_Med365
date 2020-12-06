'use strict'

const Question = use('App/Models/Question')

class QuestionController {
  async store ({ params, request, response }) {
    try {
      const body = request.all()
      if (!body || !body.description) throw new Error('Parameters descripton is required')
      const description = body.description
      const question = await Question.create({ description: description, quiz_id: params.quizzes_id })

      return response.status(201).send(question)
    } catch (error) {
      console.log(error)
      response.status(400).send(error.message)
    }
  }

  async index ({ request, response, view }) {
  }
}

module.exports = QuestionController
