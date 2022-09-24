import {
  IAuthentication,
  IDbRepository,
  IMiddleware,
} from '../../data/contracts'
import { UnauthorizedError } from '../errors'

export class AuthenticationMiddleware implements IMiddleware {
  constructor(
    private readonly authVerification: IAuthentication,
    private readonly userRepo: IDbRepository
  ) {}

  async execute(req: any): Promise<void | Error> {
    const authHeader = req.headers.authorization
    const [, token] = authHeader.split(' ')

    if (!token) {
      throw new UnauthorizedError()
    }

    const { sub } = this.authVerification.verifyHeader(token)
    const user = await this.userRepo.findOne({ id: sub })

    if (!user) {
      throw new UnauthorizedError()
    }
    req.user = user
  }
}
