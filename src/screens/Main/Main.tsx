import React, { useCallback, useLayoutEffect, useState } from 'react'
import {
  Alert,
  FlatList,
  ListRenderItem,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { IProps } from './types'

import { fetchGamesList } from '../../core'
import { Game } from '../../types'
import { GameCard } from '../../components'
import { styles } from './styles'

export const MainScreen = (props: IProps) => {
  const { navigation } = props
  const [gamesList, setGamesList] = useState<Game[]>([])
  const getGamesList = useCallback(async () => {
    try {
      const data = await fetchGamesList()
      setGamesList(data)
    } catch (error) {
      Alert.alert('Something went wrong')
    }
  }, [])

  const renderRightHeaderButton = useCallback(() => {
    const handleOnPress = () => navigation.navigate('filterAndSort')
    return (
      <TouchableOpacity onPress={handleOnPress}>
        <Text style={styles.rightHeaderButton}>Filter & Sort</Text>
      </TouchableOpacity>
    )
  }, [navigation])

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: renderRightHeaderButton,
    })
    getGamesList()
  }, [navigation, renderRightHeaderButton, getGamesList])

  const renderGame: ListRenderItem<Game> = ({ item }) => {
    return (
      <GameCard
        id={item.id}
        title={item.title}
        thumbnail={item.thumbnail}
        platform={item.platform}
        genre={item.genre}
        description={item.short_description}
      />
    )
  }

  const renderSeparator = () => <View style={styles.separator} />

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={({ id }) => `${id}`}
        data={gamesList}
        contentContainerStyle={styles.listContainer}
        ItemSeparatorComponent={renderSeparator}
        renderItem={renderGame}
      />
    </View>
  )
}
