import { sign, verify } from 'jsonwebtoken'

import { IAuthentication } from '../../data/contracts/IAuthentication'

export class JwtAuthentication implements IAuthentication {
  auth(id: string): string {
    return sign({}, 'secretKey', {
      subject: id,
      expiresIn: '1d',
    })
  }
  verifyHeader(token: string): { sub: string } {
    const decoded = verify(token, 'secretKey')
    return { sub: decoded.sub as string }
  }
}
