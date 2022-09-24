import { AuthenticationMiddleware } from '../../../application/middlewares/authentication'
import { JwtAuthentication } from '../../../infra/authentication/jwt'
import { UserRepository } from '../../../infra/db/repositories'

export const makeAuthenticationMiddleware = async () => {
  const userRepo = new UserRepository()
  const auth = new JwtAuthentication()
  return new AuthenticationMiddleware(auth, userRepo)
}
