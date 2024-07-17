import React from 'react'
import { FlatList, View } from 'react-native'

import { styles } from './styles'
import { Icon } from '../../components'

export const HomeScreen = () => {
  // const { navigation, route } = props

  return (
    <View style={styles.container}>
      <View>
        <Icon name="favorites" />
      </View>
      <FlatList
        keyExtractor={({ id }) => `${id}`}
        data={[]}
        contentContainerStyle={styles.listContainer}
        renderItem={() => <View />}
      />
    </View>
  )
}
