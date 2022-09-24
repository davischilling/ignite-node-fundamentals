import { ICreateCategoryService } from '../../../domain/usecases/categories'
import { created, HttpResponse } from '../../helpers'
import { Controller } from '../controller'

export class CreateCategoryController extends Controller {
  constructor(private readonly createCategoryService: ICreateCategoryService) {
    super()
  }

  async perform(httpRequest: any): Promise<HttpResponse> {
    await this.createCategoryService.handle(httpRequest)
    return created({ message: 'category created' })
  }
}
