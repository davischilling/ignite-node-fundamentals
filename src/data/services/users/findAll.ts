import { IFindAllUsersService } from '../../../domain/usecases/users'
import { IDbRepository } from '../../contracts'

export class FindAllUsersService implements IFindAllUsersService {
  constructor(private readonly usersRepo: IDbRepository) {}

  async handle(): Promise<IFindAllUsersService.Output> {
    return this.usersRepo.findAll()
  }
}
