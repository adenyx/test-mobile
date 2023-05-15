import React, { useCallback, useLayoutEffect } from 'react'
import { Text, View } from 'react-native'
import { IProps } from './types'

import { fetchGamesList } from '../../core'

export const MainScreen = (_props: IProps) => {
  const getGamesList = useCallback(async () => {
    try {
      const data = await fetchGamesList()
      console.log('DATA: ', data)
    } catch (error) {
      console.log('ERROR: ', error)
    }
  }, [])

  useLayoutEffect(() => {
    getGamesList()
  }, [getGamesList])

  return (
    <View>
      <Text>Hello</Text>
    </View>
  )
}
