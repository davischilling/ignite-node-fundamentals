import { IDbRepository } from '../../../data/contracts'
import { User } from '../../../data/entities/User'
import { userSchema } from '../schemas'

export class UserRepository implements IDbRepository {
  findAll() {
    return userSchema
  }
  findOne({ param }: any): User | null {
    const user = userSchema.find((el: User) => el[param] === param)
    if (user) {
      return user
    }
    return null
  }
  create(params: User): void {
    userSchema.push(params)
  }
}
