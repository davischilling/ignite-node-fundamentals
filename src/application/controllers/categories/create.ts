import { ICreateCategoryDTO } from '../../../domain/DTOs/categories'
import { CreateCategoryService } from '../../../domain/usecases/categories'
import { badRequest, created, HttpResponse } from '../../helpers'
import { Controller } from '../controller'

export class CreateCategoryController extends Controller {
  constructor(private readonly createCategory: CreateCategoryService) {
    super()
  }

  perform(params: ICreateCategoryDTO): HttpResponse {
    try {
      this.createCategory(params)
      return created({ message: 'category created' })
    } catch (error) {
      return badRequest(error)
    }
  }
}
