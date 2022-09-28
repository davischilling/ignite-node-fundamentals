export type UserModel = {
  id: string
  name: string
  username: string
  email: string
  password: string
  isAdmin: boolean
  avatar?: string
  created_at: Date
}
