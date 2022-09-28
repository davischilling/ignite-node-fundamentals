import { IDbRepository } from '../../../data/contracts'
import { Category } from '../../../data/entities/Category'
import { categorySchema } from '../schemas'

export class CategoryRepository implements IDbRepository {
  findOne: (params: any) => any
  create(category: Category) {
    const categoryAlreadyExists = categorySchema.some(
      (el) => el.name === category.name
    )
    if (categoryAlreadyExists) {
      throw new Error('category already exists')
    }
    categorySchema.push(category)
  }

  findAll() {
    return categorySchema
  }
  update(id: string, params: any): any {
    const categoryToUpdateIndex = categorySchema.findIndex((el) => el.id === id)
    if (categoryToUpdateIndex > 0) {
      categorySchema[categoryToUpdateIndex] = params
    }
  }
}
