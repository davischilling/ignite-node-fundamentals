import { ISignInUserService } from '../../../domain/usecases/users'
import { created, HttpResponse } from '../../helpers'
import { httpResponseErros } from '../../utils/httpResponseErrors'
import { Controller } from '../controller'

export class SignInController extends Controller {
  constructor(private readonly SignInUserService: ISignInUserService) {
    super()
  }

  async perform(httpRequest: any): Promise<HttpResponse> {
    try {
      const token = await this.SignInUserService.handle(httpRequest)
      return created(token)
    } catch (err) {
      return httpResponseErros(err)
    }
  }
}
