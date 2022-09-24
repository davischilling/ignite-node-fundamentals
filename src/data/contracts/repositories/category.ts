import {
  CreateCategory,
  FindAllCategories,
} from '../../../domain/usecases/categories'

export interface ICategoryRepository {
  create: (params: CreateCategory.Input) => void
  findAll: () => FindAllCategories.Output
}
