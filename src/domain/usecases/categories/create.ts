import { ICreateCategoryDTO } from '../../DTOs/categories'

export namespace CreateCategory {
  export type Input = ICreateCategoryDTO
}

export type CreateCategoryService = (params: CreateCategory.Input) => void
