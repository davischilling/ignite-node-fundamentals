import { IFindAllCategoriesService } from '../../../domain/usecases/categories'
import { IDbRepository } from '../../contracts'

export class FindAllCategoriesService implements IFindAllCategoriesService {
  constructor(private readonly categoryRepo: IDbRepository) {}

  async handle(): Promise<IFindAllCategoriesService.Output> {
    return this.categoryRepo.findAll()
  }
}
