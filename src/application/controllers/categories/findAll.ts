import { FindAllCategoriesService } from '../../../domain/usecases/categories'
import { serverError, ok, HttpResponse } from '../../helpers'
import { Controller } from '../controller'

export class FindAllController extends Controller {
  constructor(private readonly findAllCategory: FindAllCategoriesService) {
    super()
  }

  perform(): HttpResponse {
    try {
      const categories = this.findAllCategory()
      return ok(categories)
    } catch (error) {
      return serverError(new Error('Server error'))
    }
  }
}
