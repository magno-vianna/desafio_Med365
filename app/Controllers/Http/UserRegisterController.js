'use strict'

const Quiz = use('App/Models/Quiz')

class UserRegisterController {
  async index () {
    const quiz = await Quiz
      .query()
      .setHidden(['created_at', 'updated_at', 'user_id'])
      .with('questions', questionsQuery => {
        questionsQuery.setHidden(['created_at', 'updated_at', 'quiz_id'])
          .with('answers', asnwersQuery => {
            asnwersQuery.setHidden(['created_at', 'updated_at', 'question_id'])
          })
      })
      .fetch()
    return quiz
  }
}

module.exports = UserRegisterController
