import { UserModel } from '../../models'

export namespace IFindAllUsersService {
  export type Output = UserModel[]
}

export interface IFindAllUsersService {
  handle: () => Promise<IFindAllUsersService.Output>
}
