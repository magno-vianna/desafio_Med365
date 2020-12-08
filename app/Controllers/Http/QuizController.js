'use strict'

const Quiz = use('App/Models/Quiz')

class QuizController {
  async store ({ request, auth, response }) {
    try {
      const body = request.all()
      if (!body || !body.name) throw new Error('Name parameter is required')

      const quizExists = await Quiz.findBy('name', body.name)
      if (quizExists) throw new Error('Quiz already exists')

      const quiz = await Quiz.create({ name: body.name, user_id: auth.jwtPayload.uid })
      return quiz
    } catch (error) {
      response.status(400).send(error.message)
    }
  }

  async index () {
    const quizzes = await Quiz.all()
    return quizzes
  }

  async destroy ({ params }) {
    const quiz = await Quiz.findOrFail(params.id)

    await quiz.delete()
  }
}

module.exports = QuizController
