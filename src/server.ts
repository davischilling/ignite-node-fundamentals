import { Express } from 'express'

import app from './main/config/app'
// import { AppDataSource } from './main/config/database'

// AppDataSource.initialize()
//   .then(() => {
//     console.log('Data Source has been initialized!')
//   })
//   .catch((err) => {
//     console.error('Error during Data Source initialization', err)
//   })

const start = async (app: Express): Promise<void> => {
  const port = process.env.PORT
  app.listen(port, () => {
    console.log(`Running server on port ${port}`)
  })
}

start(app)
