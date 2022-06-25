import { promises as fs } from 'fs'
import { IBrand } from './LassModelsService'

const { readFile } = fs

export class ListModelsByBrandService {
  static async execute(brandName: string): Promise<string[]> {
    const file = await readFile(FILE_NAME)
    const data: IBrand[] = JSON.parse(file.toString())
    const models = data.find(
      item => item.brand.toLowerCase() === brandName.toLowerCase(),
    )?.models
    return models ?? []
  }
}
