import { IFindAllUsersService } from '../../../domain/usecases/users'
import { HttpResponse, ok } from '../../helpers'
import { Controller } from '../controller'

export class FindAllUsersController extends Controller {
  constructor(private readonly findAllUsersService: IFindAllUsersService) {
    super()
  }

  async perform(): Promise<HttpResponse> {
    const users = await this.findAllUsersService.handle()
    return ok({ users })
  }
}
