import { CreateCategoryController } from '../../../application/controllers/categories'
import { setupCreateCategory } from '../../../data/services/categories'
import { CategoryRepository } from '../../../infra/databases/typeorm/repositories'

export const makeCreateCategory = () => {
  const createCategoryService = setupCreateCategory(new CategoryRepository())
  return new CreateCategoryController(createCategoryService)
}
