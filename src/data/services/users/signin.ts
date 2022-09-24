import { SignInUserService } from '../../../domain/usecases/users'
import { IUserRepository as SignInUserRepo } from '../../contracts/repositories'

type setup = (userRepo: SignInUserRepo) => SignInUserService

export const setupSignInUser: setup =
  (userRepo) =>
  ({ email, password }) => {
    const user = userRepo.findOne({ email })
    if (!user) {
      throw new Error('User not found')
    }
    if (user.password !== password) {
      throw new Error('Invalid credentials')
    }
    return { token: 'token' }
  }
