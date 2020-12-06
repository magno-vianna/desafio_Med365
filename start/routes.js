'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

// Rota de criação de usuários
Route.post('/register', 'AuthController.register')

// Rota de autenticação de usuários
Route.post('/authenticate', 'AuthController.authenticate')

// Rota de criação e listagem de questionários
Route.post('/quizzes', 'QuizController.create')
Route.get('/quizzes', 'QuizController.index')

Route.get('/app', 'AppController.index').middleware(['auth'])

// Rota de criação e listagem de perguntas
Route.resource('quizzes.questions', 'QuestionController').apiOnly()

// Rota de criação e listagem de respostas
Route.resource('questions.answer', 'AnswerController').apiOnly()
