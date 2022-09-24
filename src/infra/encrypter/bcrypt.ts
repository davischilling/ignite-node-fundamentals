import { hash, compare } from 'bcrypt'

import { IEncrypter } from '../../data/contracts'

export class Bcrypt implements IEncrypter {
  async comparePasswords(
    passwordToCompare: string,
    savedPassword: string
  ): Promise<boolean> {
    const passwordMath = await compare(savedPassword, passwordToCompare)
    return passwordMath
  }
  async hashPassword(password: string): Promise<string> {
    const hashedPassword = await hash(password, 8)
    return hashedPassword
  }
}
