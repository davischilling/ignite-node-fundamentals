import { ISignInRequestDTO } from '../../DTOs/users'

export namespace ISignInUserService {
  export type Input = ISignInRequestDTO
  export type Output = { token: string }
}

export interface ISignInUserService {
  handle: (
    params: ISignInUserService.Input
  ) => Promise<ISignInUserService.Output>
}
