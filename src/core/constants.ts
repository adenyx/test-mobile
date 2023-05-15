import { FilterAndSortListModel } from '../types'

export const BASE_API_URL = 'https://www.freetogame.com/api'

export enum Paths {
  games = '/games',
  filter = '/filter',
}

export const FILTER_OPTIONS: FilterAndSortListModel = [
  {
    label: 'Platform',
    value: 'platform',
    options: [
      {
        label: 'PC',
        value: 'pc',
      },
      {
        label: 'Browser',
        value: 'browser',
      },
      {
        label: 'All',
        value: 'all',
      },
    ],
  },
  {
    label: 'Category',
    value: 'category',
    options: [
      {
        label: 'MMORPG',
        value: 'mmorpg',
      },
      {
        label: 'Shooter',
        value: 'shooter',
      },
      {
        label: 'Strategy',
        value: 'strategy',
      },
      {
        label: 'Action',
        value: 'action',
      },
      {
        label: 'Racing',
        value: 'racing',
      },
      {
        label: 'Sports',
        value: 'sports',
      },
      {
        label: 'MMO',
        value: 'mmo',
      },
      {
        label: 'Survival',
        value: 'survival',
      },
      {
        label: 'Social',
        value: 'social',
      },
    ],
  },
]

export const SORT_OPTIONS: FilterAndSortListModel = [
  {
    label: 'Sort By',
    value: 'sort-by',
    options: [
      {
        label: 'Release Date',
        value: 'release-date',
      },
      {
        label: 'Popularity',
        value: 'popularity',
      },
      {
        label: 'Alphabetical',
        value: 'alphabetical',
      },
      {
        label: 'Relevance',
        value: 'relevance',
      },
    ],
  },
]
