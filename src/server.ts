import app from './main/config/app'
// import { AppDataSource } from './main/config/database'

// AppDataSource.initialize()
//   .then(() => {
//     console.log('Data Source has been initialized!')
//   })
//   .catch((err) => {
//     console.error('Error during Data Source initialization', err)
//   })

app.listen(3333, () => {
  console.log('Running server on port 3333')
})
