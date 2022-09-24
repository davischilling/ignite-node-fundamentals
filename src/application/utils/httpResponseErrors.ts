import {
  ForbiddenError,
  NotFoundError,
  UnauthorizedError,
  ValidationError,
} from '../errors'
import {
  badRequest,
  forbidden,
  httpException,
  HttpResponse,
  notFound,
  unauthorized,
} from '../helpers'

export const httpResponseErros = (
  err: Error,
  exceptionStatus?: number
): HttpResponse => {
  if (err instanceof ValidationError) {
    return badRequest(err)
  }
  if (err instanceof UnauthorizedError) {
    return unauthorized(err)
  }
  if (err instanceof ForbiddenError) {
    return forbidden(err)
  }
  if (err instanceof NotFoundError) {
    return notFound(err)
  }
  return httpException({ status: exceptionStatus, _err: err })
}
