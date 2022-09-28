import { Router } from 'express'
import multer from 'multer'

import { adaptMiddlewares } from '../adapters/auth-middleware'
import { adaptExpressRoute as adaptCtrl } from '../adapters/express-router'
import { uploadConfig } from '../config/upload'
import {
  makeUserSignIn,
  makeUserSignUp,
  makeFindAllUsers,
  makeUpdateUserAvatar,
} from '../factories/entities'
import { makeAuthenticationMiddleware } from '../factories/middlewares/authentication'

const uploadAvatar = multer(uploadConfig)

const usersRoutes = async (router: Router) => {
  router.post('/singin', adaptCtrl(await makeUserSignIn()))

  router.post('/singup', adaptCtrl(await makeUserSignUp()))

  router.get(
    '/users',
    adaptMiddlewares(await makeAuthenticationMiddleware()),
    adaptCtrl(await makeFindAllUsers())
  )

  router.patch(
    '/users/avatar',
    adaptMiddlewares(await makeAuthenticationMiddleware()),
    uploadAvatar.single('file'),
    adaptCtrl(await makeUpdateUserAvatar())
  )
}

export default usersRoutes
