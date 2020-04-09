'use strict'
const { validate } = use('Validator')
const User = use('App/Models/User')


class UserController {
    //posting
    async creatUser({ request, response, session, auth }) {
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
        const user = await User.create(request.only(['email', 'password']));
        await auth.login(user);
        session.flash({ notification: 'Account added succesfully' })
        return response.redirect('/create');


    }

    async login({ request, response, session, auth }) {
        const rules = {
            email: 'required|email',
            password: 'required',
        }
        const validation = await validate(request.all(), rules)

        if (validation.fails()) {
            session
                .withErrors(validation.messages())
                .flashExcept(['password'])
            return response.redirect('back')
        }
        // const email = request.input('email')
        // const password = request.input('password')
        const { email, password } = request.all();
        try {
            await auth.attempt(email, password);
            return response.redirect('/create');
        } catch (error) {
            session.flash({ notification: 'Invalid username or password' })
            return response.redirect('back');
        }

    }


}

module.exports = UserController
