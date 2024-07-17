import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { RootNavigatorParamsList } from '../types'
import { NavigationContainer } from '@react-navigation/native'
import { TabNavigator } from '../navigation'

const Stack = createNativeStackNavigator<RootNavigatorParamsList>()

export const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="bottomTab"
          options={{
            headerShown: false,
          }}
          component={TabNavigator}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
