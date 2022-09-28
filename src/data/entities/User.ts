import { v4 as uuid } from 'uuid'

import { UserModel } from '../../domain/models'
import { UpdateUserAvatarService } from '../services/users/updateAvatar'

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
}
