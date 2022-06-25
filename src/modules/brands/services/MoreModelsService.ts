import { promises as fs } from 'fs'
import { getSortedBrandList, IBrandWithNumber } from 'helper/getSortedBrandList'
import { IBrand } from './LassModelsService'

const { readFile } = fs

export class MoreModelsService {
  static async execute(): Promise<IBrandWithNumber[]> {
    const file = await readFile(FILE_NAME)
    const data: IBrand[] = JSON.parse(file.toString())
    const sortedList = getSortedBrandList(data, true)
    return sortedList.filter(
      item => item.modelsNumber === sortedList[0].modelsNumber,
    )
  }
}
