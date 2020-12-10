'use strict'

const UserAnswerRegister = use('App/Models/UserAnswerRegister')

class UserRegisterController {
  async store ({ request, auth, response }) {
    try {
      const body = request.all()
      const { quizId, questions } = body
      questions.forEach(element => {
        const { questionId, answerOptionIds } = element
        const answerIds = !Array.isArray(answerOptionIds) ? Array.of(answerOptionIds) : answerOptionIds
        answerIds.forEach(async answerId => {
          console.log(`Salvando quizId:${quizId} questionId:${questionId} answerId:${answerId}`)
          await UserAnswerRegister.create({ user_id: auth.jwtPayload.uid, quiz_id: quizId, question_id: questionId, answer_id: answerId })
        })
      })
    } catch (error) {
      console.log(error)
      response.status(400).send(error.message)
    }
  }
}

module.exports = UserRegisterController
