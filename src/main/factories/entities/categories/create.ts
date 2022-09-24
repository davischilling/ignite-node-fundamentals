import { CreateCategoryController } from '../../../../application/controllers/categories'
import { CreateCategoryService } from '../../../../data/services/categories'
import { CategoryRepository } from '../../../../infra/db/repositories'

export const makeCreateCategory = async () => {
  const categoryRepo = new CategoryRepository()
  const createCategoryService = new CreateCategoryService(categoryRepo)
  return new CreateCategoryController(createCategoryService)
}
