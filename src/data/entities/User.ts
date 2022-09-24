import { v4 as uuid } from 'uuid'

import { ISignUpDTO } from '../../domain/DTOs/users'
import { UserModel } from '../../domain/models'

export class User implements UserModel {
  id: string
  name: string
  username: string
  email: string
  password: string
  created_at: Date
  isAdmin: boolean

  constructor({ name, username, email, password }: ISignUpDTO) {
    if (!this.id) {
      this.id = uuid()
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
  }
}
