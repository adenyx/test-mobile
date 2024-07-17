import React from 'react'
import {
  BottomTabNavigationOptions,
  BottomTabScreenProps,
} from '@react-navigation/bottom-tabs'
import { upperFirst } from 'lodash'
import { BottomTabParamsList, TIconName } from '../../types'
import { Icon } from '../../components'

const icons: { [key: string]: TIconName } = {
  home: 'profile',
  search: 'search',
  cart: 'profile',
  favorites: 'profile',
  profile: 'profile',
}

export const useTabOptionsPreset = () => {
  return ({
    route,
  }: BottomTabScreenProps<BottomTabParamsList>): BottomTabNavigationOptions => {
    console.log('ROUTE: ', route.name)
    return {
      title: `${upperFirst(route.name)} Page`,
      headerShadowVisible: false,
      headerTitleAlign: 'center',
      tabBarActiveTintColor: '#29ABE2',
      tabBarIcon: ({ focused }) => (
        <Icon
          name={icons[route.name]}
          color={focused ? '#29ABE2' : undefined}
        />
      ),
    }
  }
}
