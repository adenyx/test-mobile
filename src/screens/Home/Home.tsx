import React from 'react'
import { FlatList, View } from 'react-native'

import { styles } from './styles'

export const HomeScreen = () => {
  // const { navigation, route } = props

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={({ id }) => `${id}`}
        data={[]}
        contentContainerStyle={styles.listContainer}
        renderItem={() => <View />}
      />
    </View>
  )
}
