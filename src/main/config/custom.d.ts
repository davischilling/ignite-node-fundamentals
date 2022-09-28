// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Request } from 'express'

import { UserModel } from '../../domain/models'

declare module 'express-serve-static-core' {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  export interface Request {
    user: UserModel
  }
}
