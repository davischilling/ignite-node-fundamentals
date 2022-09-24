import { parse } from 'csv-parse'
import { Request, Response, Router } from 'express'
import fs from 'fs'
import multer from 'multer'

import { adaptExpressRoute as adaptCtrl } from '../adapters/express-router'
import { makeCreateCategory, makeFindAllCategory } from '../factories/entities'

const upload = multer({
  dest: './tmp',
})

const categoriesRoutes = async (router: Router) => {
  router.post('/categories', adaptCtrl(await makeCreateCategory()))

  router.get('/categories', adaptCtrl(await makeFindAllCategory()))

  router.post(
    '/categories/import',
    upload.single('file'),
    (req: Request, res: Response) => {
      const { file } = req
      const stream = fs.createReadStream(file.path)
      const parseFile = parse()
      stream.pipe(parseFile)
      parseFile
        .on('data', async (line) => {
          console.log(line)
        })
        .on('end', () => {
          fs.promises.unlink(file.path)
          // resolve([])
        })
        .on('error', (err) => {
          console.log(err)
          // reject(err)
        })
      return res.send()
    }
  )
}

export default categoriesRoutes
