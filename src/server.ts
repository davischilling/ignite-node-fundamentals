import { Express } from 'express'

import app from './main/config/app'

const start = async (app: Express): Promise<void> => {
  const port = process.env.PORT
  app.listen(port, () => {
    console.log(`Running server on port ${port}`)
  })
}

start(app)
