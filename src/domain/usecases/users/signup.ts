import { ISignUpDTO } from '../../DTOs/users'

export namespace SignUpUser {
  export type Input = ISignUpDTO
  export type output = { token: string }
}

export type SignUpUserService = (params: SignUpUser.Input) => SignUpUser.output
