import {
  ForbiddenError,
  NotFoundError,
  UnauthorizedError,
  ValidationError,
} from '../errors'
import {
  badRequest,
  forbidden,
  HttpResponse,
  notFound,
  serverError,
  unauthorized,
} from '../helpers'

export const httpResponseErros = (err: Error): HttpResponse => {
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
  return serverError(err)
}
