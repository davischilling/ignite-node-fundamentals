import { UpdateUserAvatarController } from '../../../../application/controllers/users'
import { UpdateUserAvatarService } from '../../../../data/services/users'
import { UserRepository } from '../../../../infra/db/repositories'
import { LocalStorageProvider } from '../../../../infra/storage/localStorage'
import { uploadConfig } from '../../../config/upload'

export const makeUpdateUserAvatar = async () => {
  const userRepository = new UserRepository()
  const storage = new LocalStorageProvider(uploadConfig.tmpFolder)
  const signUpUserService = new UpdateUserAvatarService(userRepository, storage)
  return new UpdateUserAvatarController(signUpUserService)
}
