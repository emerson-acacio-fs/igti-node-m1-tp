import { Request, Response } from 'express'
import { LassModelsService } from '../services/LassModelsService'
import { ListLessModelsService } from '../services/ListLessModelsService'
import { ListModelsByBrandService } from '../services/ListModelsByBrandService'
import { ListMoreModelsService } from '../services/ListMoreModelsService'
import { MoreModelsService } from '../services/MoreModelsService'

export class BrandController {
  static async findMore(request: Request, response: Response) {
    return response.send({ data: await MoreModelsService.execute() })
  }
  static async findLess(request: Request, response: Response) {
    return response.send({ data: await LassModelsService.execute() })
  }
  static async listMore(request: Request, response: Response) {
    const { brandNumber } = request.params
    return response.send(
      await ListMoreModelsService.execute(parseInt(brandNumber)),
    )
  }
  static async listLess(request: Request, response: Response) {
    const { brandNumber } = request.params
    return response.send(
      await ListLessModelsService.execute(parseInt(brandNumber)),
    )
  }
  static async listModels(request: Request, response: Response) {
    const { brandName } = request.body
    return response.send(await ListModelsByBrandService.execute(brandName))
  }
}
