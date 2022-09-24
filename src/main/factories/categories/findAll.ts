import { FindAllController } from '../../../application/controllers/categories'
import { setupFindAllCategory } from '../../../data/services/categories'
import { CategoryRepository } from '../../../infra/databases/typeorm/repositories'

export const makeFindAllCategory = () => {
  const FindAllCategoriesService = setupFindAllCategory(
    new CategoryRepository()
  )
  return new FindAllController(FindAllCategoriesService)
}
