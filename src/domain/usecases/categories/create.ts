import { ICreateCategoryDTO } from '../../DTOs/categories'

export namespace ICreateCategoryService {
  export type Input = ICreateCategoryDTO
}

export interface ICreateCategoryService {
  handle: (params: ICreateCategoryService.Input) => Promise<void>
}
