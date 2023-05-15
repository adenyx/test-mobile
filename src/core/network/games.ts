import { FetchGamesListResponseModel } from '../../types'
import { Paths } from '../constants'
import { apiService } from './NetworkService'

export const fetchGamesList = async () => {
  try {
    const data: FetchGamesListResponseModel = await apiService.get(Paths.games)
    return data
  } catch (error) {
    throw error
  }
}
