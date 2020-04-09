'use strict'

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
}

module.exports = PostController
