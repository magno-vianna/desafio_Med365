'use strict'

const Question = use('App/Models/Question')
const Quiz = use('App/Models/Quiz')

class QuestionController {
  async store ({ params, request, response }) {
    try {
      const body = request.all()
      if (!body || !body.description) throw new Error('Parameters descripton is required')
      const description = body.description

      if (Quiz.findBy('id', params.quizzes_id)) throw Error('Quizz not exists ')

      const questionExists = await Question
        .query()
        .where('description', description)
        .where('quiz_id', params.quizzes_id)
        .fetch()

      if (questionExists.rows.length) throw new Error('Question already exists')

      const question = await Question.create({ description: description, quiz_id: params.quizzes_id })

      return response.status(201).send(question)
    } catch (error) {
      console.log(error)
      response.status(400).send(error.message)
    }
  }

  async index () {
    const allQuestions = await Question.all()
    return allQuestions
  }

  async destroy ({ params }) {
    const question = await Question.findOrFail(params.id)

    await question.delete()
  }
}

module.exports = QuestionController
