import { RequestHandler } from 'express'

import { Controller } from '../../application/controllers/controller'

type Adapter = (controller: Controller) => RequestHandler

export const adaptExpressRoute: Adapter = (controller) => async (req, res) => {
  const { file } = req
  const { statusCode, data } = await controller.handle({
    file,
    ...req.body,
    ...req.query,
    ...req.params,
  })
  const json =
    statusCode >= 200 && statusCode < 300 ? data : { error: data.message }
  res.status(statusCode).json(json)
}
