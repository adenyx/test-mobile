import { StackNavigationProp } from '@react-navigation/stack'
import { RouteProp } from '@react-navigation/native'
import { RootNavigatorParamsList } from '../../types'

export type FilterAndSortScreenNavigationProps = StackNavigationProp<
  RootNavigatorParamsList,
  'filterAndSort'
>

export type FilterAndSortScreenRouteProps = RouteProp<
  RootNavigatorParamsList,
  'filterAndSort'
>

export interface IProps {
  navigation: FilterAndSortScreenNavigationProps
  route: FilterAndSortScreenRouteProps
}
