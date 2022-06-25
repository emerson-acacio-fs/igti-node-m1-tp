import { promises as fs } from 'fs'
import { getSortedBrandList, IBrandWithNumber } from 'helper/getSortedBrandList'

const { readFile } = fs

export interface IBrand {
  brand: string
  models: string[]
}

export class LassModelsService {
  static async execute(): Promise<IBrandWithNumber[]> {
    const file = await readFile(FILE_NAME)
    const data: IBrand[] = JSON.parse(file.toString())

    const sortedList = getSortedBrandList(data)
    return sortedList.filter(
      item => item.modelsNumber === sortedList[0].modelsNumber,
    )
  }
}
