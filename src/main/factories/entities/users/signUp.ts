import { SignUpController } from '../../../../application/controllers/users'
import { SignUpUserService } from '../../../../data/services/users'
import { JwtAuthentication } from '../../../../infra/authentication/jwt'
import { UserRepository } from '../../../../infra/db/repositories'
import { Bcrypt } from '../../../../infra/encrypter/bcrypt'

export const makeUserSignUp = async () => {
  const userRepository = new UserRepository()
  const encrypter = new Bcrypt()
  const jwtAuth = new JwtAuthentication()
  const signUpUserService = new SignUpUserService(
    userRepository,
    encrypter,
    jwtAuth
  )
  return new SignUpController(signUpUserService)
}
