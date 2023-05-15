import { FilterAndSortListModel, FilterAndSortOptionItemModel } from '../types'

export type RootNavigatorParamsList = {
  main:
    | {
        selectedFilters: FilterAndSortListModel
        selectedSortOption: FilterAndSortOptionItemModel | null
      }
    | undefined
  filterAndSort:
    | {
        selectedFilters: FilterAndSortListModel
        selectedSortOption: FilterAndSortOptionItemModel | null
      }
    | undefined
}
