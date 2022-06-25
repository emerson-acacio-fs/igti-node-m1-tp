import { IBrand } from 'modules/brands/services/LassModelsService'
import { sortObj } from './sortObj'

export interface IBrandWithNumber {
  brand: string
  modelsNumber: number
}

export function getSortedBrandList(
  data: IBrand[],
  isDesc = false,
): IBrandWithNumber[] {
  return sortObj(
    data.map(item => ({
      brand: item.brand,
      modelsNumber: item.models.length,
    })),
    'modelsNumber',
    isDesc ? 'desc' : 'asc',
  )
}
