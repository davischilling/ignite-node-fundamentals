import { IUpdateUserAvatarService } from '../../../domain/usecases/users'
import { HttpResponse, ok } from '../../helpers'
import { httpResponseErros } from '../../utils/httpResponseErrors'
import { Controller } from '../controller'

export class UpdateUserAvatarController extends Controller {
  constructor(
    private readonly updateUserAvatarService: IUpdateUserAvatarService
  ) {
    super()
  }

  async perform(httpRequest: any): Promise<HttpResponse> {
    try {
      await this.updateUserAvatarService.handle(httpRequest)
      return ok({ data: { message: 'Avatar updated' } })
    } catch (err) {
      return httpResponseErros(err)
    }
  }
}
