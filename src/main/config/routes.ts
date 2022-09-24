import { Router, Express } from 'express'

export const apiRoutes = async (app: Express) => {
  const router = Router()

  ;(await import('../routes/categories')).default(router)
  ;(await import('../routes/users')).default(router)

  app.use(router)
}
