import { ISignInDTO } from '../../../domain/DTOs/users'
import { SignInUserService } from '../../../domain/usecases/users'
import { badRequest, created, HttpResponse } from '../../helpers'
import { Controller } from '../controller'

export class SignInController extends Controller {
  constructor(private readonly SignInUser: SignInUserService) {
    super()
  }

  perform(params: ISignInDTO): HttpResponse {
    try {
      const token = this.SignInUser(params)
      return created(token)
    } catch (error) {
      return badRequest(error)
    }
  }
}
