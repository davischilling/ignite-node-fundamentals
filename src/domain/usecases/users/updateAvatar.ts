import { IUpdateUserAvatarRequestDTO } from '../../DTOs/users'
import { UserModel } from '../../models/User'

export namespace IUpdateUserAvatarService {
  export type Input = IUpdateUserAvatarRequestDTO & { user: UserModel }
}

export interface IUpdateUserAvatarService {
  handle: (params: IUpdateUserAvatarService.Input) => Promise<void>
}
