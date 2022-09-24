import { FindAllCategoriesService } from '../../../domain/usecases/categories'
import { ICategoryRepository as FindAllCategoriesRepo } from '../../contracts/repositories'

type setup = (categoryRepo: FindAllCategoriesRepo) => FindAllCategoriesService

export const setupFindAllCategory: setup = (categoryRepo) => () => {
  return categoryRepo.findAll()
}
