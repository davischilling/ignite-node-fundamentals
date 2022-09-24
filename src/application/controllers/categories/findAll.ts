import { IFindAllCategoriesService } from '../../../domain/usecases/categories'
import { HttpResponse, ok } from '../../helpers'
import { Controller } from '../controller'

export class FindAllCategoriesController extends Controller {
  constructor(
    private readonly findAllCategoriesService: IFindAllCategoriesService
  ) {
    super()
  }

  async perform(): Promise<HttpResponse> {
    const categories = await this.findAllCategoriesService.handle()
    return ok({ categories })
  }
}
