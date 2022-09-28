import { IUpdateUserAvatarService } from '../../../domain/usecases/users'
import { IDbRepository, IStorageProvider } from '../../contracts'
import { User } from '../../entities'

export class UpdateUserAvatarService implements IUpdateUserAvatarService {
  constructor(
    private readonly userRepo: IDbRepository,
    private readonly storage: IStorageProvider
  ) {}

  async handle({
    file: avatar,
    user,
  }: IUpdateUserAvatarService.Input): Promise<void> {
    if (user.avatar) {
      await this.storage.delete(user.avatar, 'avatar')
    }
    await this.storage.save(avatar.filename, 'avatar')
    const updatedUser = new User({ ...user, avatar: avatar.filename })
    await this.userRepo.update(updatedUser.id, updatedUser)
  }
}
