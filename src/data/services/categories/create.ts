import { ICreateCategoryService } from '../../../domain/usecases/categories'
import { IDbRepository } from '../../contracts'
import { Category } from '../../entities'

export class CreateCategoryService implements ICreateCategoryService {
  constructor(private readonly categoryRepo: IDbRepository) {}

  async handle(params: ICreateCategoryService.Input): Promise<void> {
    const newCategory = new Category(params)
    this.categoryRepo.create(newCategory)
  }
}
