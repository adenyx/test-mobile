import React, { memo } from 'react'
import { Image, Text, View } from 'react-native'

import { GameCardProps } from './types'
import { styles } from './styles'

export const GameCard = memo<GameCardProps>((props) => {
  const { title, thumbnail, platform, genre } = props
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: thumbnail }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <Text>{title}</Text>
      <Text>{platform}</Text>
      <Text>{genre}</Text>
    </View>
  )
})
