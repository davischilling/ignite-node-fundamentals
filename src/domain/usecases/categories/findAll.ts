import { CategoryModel } from '../../models'

export namespace IFindAllCategoriesService {
  export type Output = CategoryModel[]
}

export interface IFindAllCategoriesService {
  handle: () => Promise<IFindAllCategoriesService.Output>
}
