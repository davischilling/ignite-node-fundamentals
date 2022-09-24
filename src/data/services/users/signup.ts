import { SignUpUserService } from '../../../domain/usecases/users'
import { IUserRepository as SignUpUserRepo } from '../../contracts/repositories'
import { User } from '../../entities'

type setup = (userRepo: SignUpUserRepo) => SignUpUserService

export const setupSignUpUser: setup = (userRepo) => (params) => {
  const user = userRepo.findOne({ email: params.email })
  if (!user) {
    throw new Error('User not found')
  }
  const newUser = new User(params)
  userRepo.create(newUser)
  return { token: 'token' }
}
