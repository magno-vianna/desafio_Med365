'use strict'

const Answer = use('App/Models/Answer')

class AnswerController {
  async store ({ params, request, response }) {
    try {
      const body = request.all()
      if (!body || !body.option) throw new Error('Parameters options is required')
      const options = body.option

      const answerExists = await Answer.findBy('option', options)
      if (answerExists) throw new Error('Answer already exists')

      const answer = await Answer.create({ option: options, question_id: params.questions_id })

      return response.status(201).send(answer)
    } catch (error) {
      console.log(error)
      response.status(400).send(error.message)
    }
  }

  async index () {
    const answers = await Answer.all()
    return answers
  }

  async destroy ({ params }) {
    const answers = await Answer.findOrFail(params.id)

    await answers.delete()
  }
}

module.exports = AnswerController
