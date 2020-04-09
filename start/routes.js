'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

//Route.on('/').render('home')

Route.get('/', 'PostController.index')
Route.get('/create', 'PostController.create').as('users.create')
//Route.get('/view', 'PostController.view').as('users.view')
Route.get('/register', 'PostController.register').as('users.register')
Route.get('/login', 'PostController.login').as('users.login')
Route.get('/user_post', 'PostController.userIndex').as('user.post')
Route.get('/posts/edit/:id', 'PostController.edit');
//posting
Route.post('/register', 'UserController.creatUser').as('users.register')
Route.post('/login', 'UserController.login').as('users.login')
Route.post('/create', 'PostController.store').as('user.create')
Route.put('/posts/:id', 'PostController.update');
Route.delete('/posts/:id', 'PostController.destroy');



Route.get('/logout', async ({ auth, response }) => {
    await auth.logout();
    return response.redirect('/login');

})

