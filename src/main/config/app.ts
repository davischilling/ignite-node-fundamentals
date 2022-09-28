// import 'reflect-metadata'
import express from 'express'
import 'express-async-errors'
import swaggerIi from 'swagger-ui-express'

import { apiRoutes } from './routes'
import swaggerFile from './swagger.json'
import { uploadConfig } from './upload'

const app = express()

app.use(express.json())
app.use('/api-docs', swaggerIi.serve, swaggerIi.setup(swaggerFile))
app.use('/avatar', express.static(`${uploadConfig.tmpFolder}/avatar`))

apiRoutes(app)

export default app
