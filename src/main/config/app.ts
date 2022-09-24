import 'reflect-metadata'
import express, { NextFunction, Request, Response } from 'express'
import 'express-async-errors'
import swaggerIi from 'swagger-ui-express'

import { makeErrorResponseMiddleware } from '../factories/middlewares/error'
import { apiRoutes } from './routes'
import swaggerFile from './swagger.json'

const app = express()

app.use(express.json())
app.use('/api-docs', swaggerIi.serve, swaggerIi.setup(swaggerFile))

apiRoutes(app)

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((error: Error, req: Request, res: Response, _next: NextFunction) => {
  const errorMiddleware = makeErrorResponseMiddleware()
  const { statusCode, data } = errorMiddleware.execute(error)
  console.log(statusCode, data)

  return res.status(statusCode).json({ data: data.message })
})

export default app
