import { CategoryModel } from '../../models'

export namespace FindAllCategories {
  export type Output = CategoryModel[]
}

export type FindAllCategoriesService = () => FindAllCategories.Output
