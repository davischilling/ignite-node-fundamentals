import { ISignUpDTO } from '../../../domain/DTOs/users'
import { SignUpUserService } from '../../../domain/usecases/users'
import { badRequest, created, HttpResponse } from '../../helpers'
import { Controller } from '../controller'

export class SignUpController extends Controller {
  constructor(private readonly SignUpUser: SignUpUserService) {
    super()
  }

  perform(params: ISignUpDTO): HttpResponse {
    try {
      const token = this.SignUpUser(params)
      return created(token)
    } catch (error) {
      return badRequest(error)
    }
  }
}
