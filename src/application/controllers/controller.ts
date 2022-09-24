import { HttpResponse, serverError } from '../helpers'

export abstract class Controller {
  abstract perform(httpRequest: any): HttpResponse

  handle(httpRequest: any): HttpResponse {
    try {
      return this.perform(httpRequest)
    } catch (error: any) {
      // if (process.env.NODE_ENV === 'development') {
      //   console.log(error)
      // }
      return serverError(error)
    }
  }
}
