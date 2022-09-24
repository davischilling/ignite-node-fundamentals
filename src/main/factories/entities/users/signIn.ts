import { SignInController } from '../../../../application/controllers/users'
import { SignInUserService } from '../../../../data/services/users'
import { JwtAuthentication } from '../../../../infra/authentication/jwt'
import { UserRepository } from '../../../../infra/db/repositories'
import { Bcrypt } from '../../../../infra/encrypter/bcrypt'

export const makeUserSignIn = async () => {
  const userRepository = new UserRepository()
  const jwtAuth = new JwtAuthentication()
  const encrypter = new Bcrypt()
  const signInUserService = new SignInUserService(
    userRepository,
    encrypter,
    jwtAuth
  )
  return new SignInController(signInUserService)
}
