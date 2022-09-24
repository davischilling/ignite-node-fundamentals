import { SignInController } from '../../../application/controllers/users'
import { setupSignInUser } from '../../../data/services/users'
import { UserRepository } from '../../../infra/databases/typeorm/repositories'

export const makeUserSignIn = () => {
  const userSignInService = setupSignInUser(new UserRepository())
  return new SignInController(userSignInService)
}
