import { IUserRepository } from '../../../../data/contracts/repositories'
import { User } from '../../../../data/entities/User'
import { userSchema } from '../schemas'

export class UserRepository implements IUserRepository {
  findOne({ email }): User | null {
    const user = userSchema.find((el: User) => el.email === email)
    if (user) {
      return user
    }
    return null
  }
  create(params: User): void {
    userSchema.push(params)
  }
}
