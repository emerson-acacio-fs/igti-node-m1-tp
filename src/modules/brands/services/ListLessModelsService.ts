import { promises as fs } from 'fs'
import { getSortedBrandList } from 'helper/getSortedBrandList'
import { IBrand } from './LassModelsService'

const { readFile } = fs

export class ListLessModelsService {
  static async execute(brandNumber: number): Promise<string[]> {
    const file = await readFile(FILE_NAME)
    const data: IBrand[] = JSON.parse(file.toString())
    const sortedList = getSortedBrandList(data)
    return sortedList
      .sort((a, b) => {
        if (a.modelsNumber === b.modelsNumber) {
          return b.brand > a.brand ? -1 : 1
        }
        return 1
      })
      .slice(0, brandNumber)
      .map(item => `${item.brand} - ${item.modelsNumber}`)
  }
}
