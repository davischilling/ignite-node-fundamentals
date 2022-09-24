import { ISignInDTO } from '../../DTOs/users'

export namespace SignInUser {
  export type Input = ISignInDTO
  export type output = { token: string }
}

export type SignInUserService = (params: SignInUser.Input) => SignInUser.output
