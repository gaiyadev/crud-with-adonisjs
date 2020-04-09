'use strict'
const { validate } = use('Validator')
const Post = use('App/Models/Post')
const User = use('App/Models/User')

class PostController {

    async index({ view }) {
        return view.render('posts.index', {
            title: 'Adonis Blog'
        })
    }
    //creating a new post 
    async create({ view }) {
        return view.render('posts.create_post', {
            title: 'Create Blog'
        })
    }

    async view({ view }) {
        return view.render('posts.view_post', {
            title: 'View Post'
        })
    }
    async login({ view }) {
        return view.render('posts.login', {
            title: 'Login User'
        })
    }
    async register({ view }) {
        return view.render('posts.register', {
            title: 'Register User'
        })
    }

    //posting
    async store({ request, response, session }) {
        const rules = {
            email: 'required|email|unique:users,email',
            password: 'required',
            Rpassword: 'required|same:password'
        }
        const validation = await validate(request.all(), rules)

        if (validation.fails()) {
            session
                .withErrors(validation.messages())
                .flashExcept(['password'])
            return response.redirect('back')
        }

        const Post = new Post()
        post.title = request.input('email')
        post.body = request.input('password')
        await post.save()
        session.flash({ notification: 'Post added succesfully' })
        return response.redirect('/create')
    }
}

module.exports = PostController
