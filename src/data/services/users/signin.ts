import { NotFoundError, ValidationError } from '../../../application/errors'
import { ISignInUserService } from '../../../domain/usecases/users'
import { IDbRepository, IAuthentication, IEncrypter } from '../../contracts'

export class SignInUserService implements ISignInUserService {
  constructor(
    private readonly userRepo: IDbRepository,
    private readonly encrypter: IEncrypter,
    private readonly userAuthentication: IAuthentication
  ) {}

  async handle({
    email,
    password,
  }: ISignInUserService.Input): Promise<ISignInUserService.Output> {
    const user = this.userRepo.findOne({ email })
    if (!user) {
      throw new NotFoundError('User')
    }
    const passwordsMath = await this.encrypter.comparePasswords(
      user.password,
      password
    )
    if (!passwordsMath) {
      throw new ValidationError("Passwords don't match")
    }
    const token = this.userAuthentication.auth(user.id)
    return { token }
  }
}
