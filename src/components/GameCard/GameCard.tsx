import React, { memo } from 'react'
import { Image, Text, View } from 'react-native'

import { GameCardProps } from './types'
import { styles } from './styles'

export const GameCard = memo<GameCardProps>((props) => {
  const { title, thumbnail, platform, genre, description } = props
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: thumbnail }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={styles.detailsContainer}>
        <View>
          <Text style={styles.title}>
            {title} ({genre})
          </Text>
          <Text numberOfLines={2}>{description}</Text>
        </View>
        <Text>Platform: {platform}</Text>
      </View>
    </View>
  )
})
