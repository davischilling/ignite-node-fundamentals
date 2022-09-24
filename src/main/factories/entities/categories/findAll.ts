import { FindAllCategoriesController } from '../../../../application/controllers/categories'
import { FindAllCategoriesService } from '../../../../data/services/categories'
import { CategoryRepository } from '../../../../infra/db/repositories'

export const makeFindAllCategory = async () => {
  const categoryRepo = new CategoryRepository()
  const findAllCategoriesService = new FindAllCategoriesService(categoryRepo)
  return new FindAllCategoriesController(findAllCategoriesService)
}
