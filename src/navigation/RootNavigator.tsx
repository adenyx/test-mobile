import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { RootNavigatorParamsList } from '../types'
import { NavigationContainer } from '@react-navigation/native'
import { FilterAndSortScreen, MainScreen } from '../screens'

const Stack = createNativeStackNavigator<RootNavigatorParamsList>()

export const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="main"
          options={{
            title: 'Test Project',
          }}
          component={MainScreen}
        />
        <Stack.Screen
          name="filterAndSort"
          options={{
            title: 'Filter and Sort',
          }}
          component={FilterAndSortScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
