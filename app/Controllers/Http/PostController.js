'use strict'

const Database = use('Database')
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
    async store({ request, response, session, auth }) {
        const rules = {
            title: 'required',
            body: 'required',
        }
        const validation = await validate(request.all(), rules)

        if (validation.fails()) {
            session.withErrors(validation.messages()).flashExcept(['password'])
            return response.redirect('back');
        }

        const post = new Post()
        post.title = request.input('title');
        post.body = request.input('body');
        post.user_id = auth.user.id;
        await post.save()
        session.flash({ notification: 'Post added succesfully' });
        return response.redirect('/create');
    }


    async userIndex({ view, auth }) {
        const posts = Database.table('posts').select('*').where('user_id', '=', auth.user.id);
        return view.render('posts.user_index', {
            posts: posts.toJSON()
        })

    }


}

module.exports = PostController
