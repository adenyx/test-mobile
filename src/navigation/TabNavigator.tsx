import React from 'react'
import { BottomTabParamsList } from '../types'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeScreen } from '../screens'
import { useTabOptionsPreset } from './utils/tabbarPreset'

const Tab = createBottomTabNavigator<BottomTabParamsList>()

export const TabNavigator = () => {
  const tabOptions = useTabOptionsPreset()
  return (
    <Tab.Navigator
      screenOptions={(navigationProps) => ({
        ...tabOptions(navigationProps),
      })}
    >
      <Tab.Screen
        name="home"
        // options={{
        //   title: 'Home Page',
        // }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="search"
        // options={{
        //   title: 'Search Page',
        // }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="cart"
        // options={{
        //   title: 'Cart Page',
        // }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="favorites"
        // options={{
        //   title: 'Favorites Page',
        // }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="profile"
        // options={{
        //   title: 'Profile Page',
        // }}
        component={HomeScreen}
      />
    </Tab.Navigator>
  )
}
