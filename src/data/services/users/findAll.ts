import { UserModel } from '../../../domain/models/User'
import { IFindAllUsersService } from '../../../domain/usecases/users'
import { IDbRepository } from '../../contracts'
import { User } from '../../entities'

export class FindAllUsersService implements IFindAllUsersService {
  constructor(private readonly usersRepo: IDbRepository) {}

  async handle(): Promise<IFindAllUsersService.Output> {
    const users: UserModel[] = this.usersRepo.findAll()
    return users.map((user) => User.toDTO(user))
  }
}
