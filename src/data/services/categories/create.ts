import { CreateCategoryService } from '../../../domain/usecases/categories/create'
import { ICategoryRepository as CreateCategoryRepo } from '../../contracts/repositories'
import { Category } from '../../entities'

type setup = (categoryRepo: CreateCategoryRepo) => CreateCategoryService

export const setupCreateCategory: setup = (categoryRepo) => (params) => {
  const newCategory = new Category(params)
  categoryRepo.create(newCategory)
}
