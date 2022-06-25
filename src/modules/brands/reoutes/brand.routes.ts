import { celebrate, Joi, Segments } from 'celebrate'
import { Router } from 'express'
import { BrandController } from 'modules/brands/controllers/BrandController'

const brandRoutes = Router()

brandRoutes.get('/moreModels', BrandController.findMore)
brandRoutes.get('/listMoreModels/:brandNumber', BrandController.listMore)
brandRoutes.get('/lessModels', BrandController.findLess)
brandRoutes.get('/listLessModels/:brandNumber', BrandController.listLess)
brandRoutes.post(
  '/listModels',
  celebrate({
    [Segments.BODY]: {
      brandName: Joi.string().required(),
    },
  }),
  BrandController.listModels,
)

export { brandRoutes }
