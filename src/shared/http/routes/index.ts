import { Router } from 'express'
import { brandRoutes } from 'modules/brands/reoutes/brand.routes'

const routes = Router()

routes.use('/brands', brandRoutes)

export { routes }
