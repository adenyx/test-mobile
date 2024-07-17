import { NavigatorScreenParams } from '@react-navigation/native'

export type BottomTabParamsList = {
  home: NavigatorScreenParams<HomeNavigatorParamsList>
  search: NavigatorScreenParams<SearchNavigatorParamsList>
  cart: NavigatorScreenParams<CartNavigatorParamsList>
  favorites: NavigatorScreenParams<FavoritesNavigatorParamsList>
  profile: NavigatorScreenParams<ProfileNavigatorParamsList>
}

export type HomeNavigatorParamsList = {
  mainHome: undefined
}

export type SearchNavigatorParamsList = {
  mainSearch: undefined
}

export type CartNavigatorParamsList = {
  mainCart: undefined
}

export type FavoritesNavigatorParamsList = {
  mainFavorites: undefined
}

export type ProfileNavigatorParamsList = {
  mainProfile: undefined
}

export type RootNavigatorParamsList = {
  bottomTab: NavigatorScreenParams<BottomTabParamsList>
}
