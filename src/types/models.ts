export type FilterAndSortListModel = FilterAndSortItemModel[]

export interface FilterAndSortItemModel {
  label: string
  value: string
  options: FilterAndSortOptionItemModel[]
}

export interface FilterAndSortOptionItemModel {
  label: string
  value: string
}
