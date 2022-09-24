import { Request, NextFunction, Response, RequestHandler } from 'express'

import { IMiddleware } from '../../data/contracts'

type Adapter = (middleware: IMiddleware) => RequestHandler

export const adaptMiddlewares: Adapter =
  (middleware) => async (req: Request, res: Response, next: NextFunction) => {
    try {
      await middleware.execute(req)
    } catch (err) {
      return res.status(401).json({ error: err.message })
    }
    return next()
  }
