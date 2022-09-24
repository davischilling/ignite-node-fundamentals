import { ICategoryRepository } from '../../../../data/contracts/repositories'
import { Category } from '../../../../data/entities/Category'
import { categorySchema } from '../schemas'

export class CategoryRepository implements ICategoryRepository {
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
}
