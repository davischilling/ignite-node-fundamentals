import { ValidationError } from '../../../application/errors'
import { ISignUpUserService } from '../../../domain/usecases/users'
import { IDbRepository, IEncrypter, IAuthentication } from '../../contracts'
import { User } from '../../entities'

export class SignUpUserService implements ISignUpUserService {
  constructor(
    private readonly userRepo: IDbRepository,
    private readonly encrypter: IEncrypter,
    private readonly userAuthentication: IAuthentication
  ) {}

  async handle({
    name,
    username,
    email,
    password,
  }: ISignUpUserService.Input): Promise<ISignUpUserService.Output> {
    const user = this.userRepo.findOne({ email })
    if (user) {
      throw new ValidationError('User already exists')
    }
    const hashedPassword = await this.encrypter.hashPassword(password)
    const newUser = new User({
      email,
      password: hashedPassword,
      name,
      username,
    })
    this.userRepo.create(newUser)
    const token = this.userAuthentication.auth(newUser.id)
    return { token }
  }
}
