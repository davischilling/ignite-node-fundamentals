import { IErrorMiddleware } from '../../data/contracts'
import { httpResponseErros } from '../utils/httpResponseErrors'

export class ErrorResponseMiddleware implements IErrorMiddleware {
  execute(err: Error): { statusCode: number; data: Error } {
    return httpResponseErros(err)
  }
}
