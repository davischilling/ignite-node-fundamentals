import { ISignInDTO } from '../../DTOs/users'

export namespace ISignInUserService {
  export type Input = ISignInDTO
  export type Output = { token: string }
}

export interface ISignInUserService {
  handle: (
    params: ISignInUserService.Input
  ) => Promise<ISignInUserService.Output>
}
