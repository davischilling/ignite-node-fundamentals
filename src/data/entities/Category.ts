import { v4 as uuid } from 'uuid'

import { ICreateCategoryDTO } from '../../domain/DTOs/categories'
import { CategoryModel } from '../../domain/models/Category'

export class Category implements CategoryModel {
  id: string
  name: string
  description: string
  created_at: Date

  constructor({ name, description }: ICreateCategoryDTO) {
    if (!this.id) {
      this.id = uuid()
    }
    if (!this.created_at) {
      this.created_at = new Date()
    }
    this.name = name
    this.description = description
  }
}
