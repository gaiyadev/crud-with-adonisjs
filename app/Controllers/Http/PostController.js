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
            title: 'Create Blog'
        })
    }
}

module.exports = PostController
