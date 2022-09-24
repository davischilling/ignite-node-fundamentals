import { Router } from 'express'

import { adaptMiddlewares } from '../adapters/auth-middleware'
import { adaptExpressRoute as adaptCtrl } from '../adapters/express-router'
import {
  makeUserSignIn,
  makeUserSignUp,
  makeFindAllUsers,
} from '../factories/entities'
import { makeAuthenticationMiddleware } from '../factories/middlewares/authentication'

const usersRoutes = async (router: Router) => {
  router.post('/singin', adaptCtrl(await makeUserSignIn()))

  router.post('/singup', adaptCtrl(await makeUserSignUp()))

  router.get(
    '/users',
    adaptMiddlewares(await makeAuthenticationMiddleware()),
    adaptCtrl(await makeFindAllUsers())
  )
}

export default usersRoutes
