import { v4 as uuid } from 'uuid'
// import { Expose } from 'class-transformer'

import { IFindAllUsersResponseDTO } from '../../domain/DTOs/users'
import { UserModel } from '../../domain/models'

export class User implements UserModel {
  id: string
  name: string
  username: string
  email: string
  password: string
  created_at: Date
  isAdmin: boolean
  avatar?: string

  constructor({ id, name, username, email, password, avatar }: UserModel) {
    if (!id) {
      this.id = uuid()
    } else {
      this.id = id
    }
    if (!this.created_at) {
      this.created_at = new Date()
    }
    if (!this.isAdmin) {
      this.isAdmin = false
    }
    this.name = name
    this.username = username
    this.email = email
    this.password = password
    if (avatar) {
      this.avatar = avatar
    }
  }

  static toDTO({
    id,
    name,
    username,
    email,
    avatar,
  }: UserModel): IFindAllUsersResponseDTO {
    const avatar_url = User.getAvatarUrl(avatar)
    return {
      id,
      name,
      username,
      email,
      avatar: avatar_url,
    }
  }

  static getAvatarUrl(avatar: string): string | null {
    switch (process.env.NODE_ENV) {
      case 'production': {
        return `${process.env.AWS_BUCKET_URL}/avatar/${avatar}`
      }
      case 'development': {
        return `${process.env.APP_API_URL}/avatar/${avatar}`
      }
      default:
        return null
    }
  }
}
