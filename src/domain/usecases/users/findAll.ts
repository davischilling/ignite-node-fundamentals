import { IFindAllUsersResponseDTO } from '../../DTOs/users'

export namespace IFindAllUsersService {
  export type Output = IFindAllUsersResponseDTO[]
}

export interface IFindAllUsersService {
  handle: () => Promise<IFindAllUsersService.Output>
}
