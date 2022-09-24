import { User } from '../../entities'

type FindOne = {
  email: string
}

type Create = User

export interface IUserRepository {
  findOne: (params: FindOne) => User | null
  create: (params: Create) => void
}
