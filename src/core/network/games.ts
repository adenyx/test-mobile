import {
  FetchGamesListResponseModel,
  FilterAndSortListModel,
  FilterAndSortOptionItemModel,
} from '../../types'
import { Paths } from '../constants'
import { apiService } from './NetworkService'

export const fetchGamesList = async (
  selectedFilters?: FilterAndSortListModel,
  selectedSortOption?: FilterAndSortOptionItemModel | null,
) => {
  try {
    const platformFilter = selectedFilters?.find(
      (el) => el.value === 'platform',
    )
    const categoryFilter = selectedFilters?.find(
      (el) => el.value === 'category',
    )

    const data: FetchGamesListResponseModel = await apiService.get(
      Paths.games,
      {
        params: {
          platform: platformFilter?.options[0].value,
          category: categoryFilter?.options[0].value,
          'sort-by': selectedSortOption?.value,
        },
      },
    )
    return data
  } catch (error) {
    throw error
  }
}
