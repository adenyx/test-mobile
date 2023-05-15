import React, { useCallback, useLayoutEffect, useState } from 'react'
import { Alert, FlatList, ListRenderItem, View } from 'react-native'
import { IProps } from './types'

import { fetchGamesList } from '../../core'
import { Game } from '../../types'
import { GameCard } from '../../components'
import { styles } from './styles'

export const MainScreen = (_props: IProps) => {
  const [gamesList, setGamesList] = useState<Game[]>([])
  const getGamesList = useCallback(async () => {
    try {
      const data = await fetchGamesList()
      setGamesList(data)
    } catch (error) {
      Alert.alert('Something went wrong')
    }
  }, [])

  useLayoutEffect(() => {
    getGamesList()
  }, [getGamesList])

  const renderGame: ListRenderItem<Game> = ({ item }) => {
    return (
      <GameCard
        id={item.id}
        title={item.title}
        thumbnail={item.thumbnail}
        platform={item.platform}
        genre={item.genre}
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
