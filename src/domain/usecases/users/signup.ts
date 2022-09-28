import { ISignUpRequestDTO } from '../../DTOs/users'

export namespace ISignUpUserService {
  export type Input = ISignUpRequestDTO
  export type Output = { token: string }
}

export interface ISignUpUserService {
  handle: (
    params: ISignUpUserService.Input
  ) => Promise<ISignUpUserService.Output>
}
