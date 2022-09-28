import { UpdateUserAvatarController } from '../../../../application/controllers/users'
import { IStorageProvider } from '../../../../data/contracts'
import { UpdateUserAvatarService } from '../../../../data/services/users'
import { UserRepository } from '../../../../infra/db/repositories'
import {
  AWSStorageProvider,
  LocalStorageProvider,
} from '../../../../infra/storage'
import { uploadConfig } from '../../../config/upload'

export const makeUpdateUserAvatar = async () => {
  const userRepository = new UserRepository()
  let storage: IStorageProvider
  if (process.env.NODE_ENV === 'production') {
    storage = new AWSStorageProvider()
  } else {
    storage = new LocalStorageProvider(uploadConfig.tmpFolder)
  }
  const signUpUserService = new UpdateUserAvatarService(userRepository, storage)
  return new UpdateUserAvatarController(signUpUserService)
}
