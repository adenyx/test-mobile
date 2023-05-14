import { StackNavigationProp } from '@react-navigation/stack'
import { RouteProp } from '@react-navigation/native'
import { RootNavigatorParamsList } from '../../types'

export type MainScreenNavigationProps = StackNavigationProp<
  RootNavigatorParamsList,
  'main'
>

export type MainScreenRouteProps = RouteProp<RootNavigatorParamsList, 'main'>

export interface IProps {
  navigation: MainScreenNavigationProps
  route: MainScreenRouteProps
}
