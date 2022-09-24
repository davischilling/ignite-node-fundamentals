import { FindAllUsersController } from '../../../../application/controllers/users'
import { FindAllUsersService } from '../../../../data/services/users'
import { UserRepository } from '../../../../infra/db/repositories'

export const makeFindAllUsers = async () => {
  const userRepo = new UserRepository()
  const findAllUsersService = new FindAllUsersService(userRepo)
  return new FindAllUsersController(findAllUsersService)
}
