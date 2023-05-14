import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { RootNavigator } from './src/navigation'

const AppContainer = () => {
  return <RootNavigator />
}

export default () => (
  <SafeAreaProvider>
    <AppContainer />
  </SafeAreaProvider>
)
