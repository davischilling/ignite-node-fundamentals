import { ISignUpDTO } from '../../DTOs/users'

export namespace ISignUpUserService {
  export type Input = ISignUpDTO
  export type Output = { token: string }
}

export interface ISignUpUserService {
  handle: (
    params: ISignUpUserService.Input
  ) => Promise<ISignUpUserService.Output>
}
