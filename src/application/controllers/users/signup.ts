import { ISignUpUserService } from '../../../domain/usecases/users'
import { created, HttpResponse } from '../../helpers'
import { httpResponseErros } from '../../utils/httpResponseErrors'
import { Controller } from '../controller'

export class SignUpController extends Controller {
  constructor(private readonly SignUpUserService: ISignUpUserService) {
    super()
  }

  async perform(httpRequest: any): Promise<HttpResponse> {
    try {
      const token = await this.SignUpUserService.handle(httpRequest)
      return created(token)
    } catch (err) {
      return httpResponseErros(err)
    }
  }
}
