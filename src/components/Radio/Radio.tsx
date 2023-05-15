import React, { memo, useCallback } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

import { RadioProps } from './types'
import { styles } from './styles'

export const Radio = memo<RadioProps>((props) => {
  const { value, onPress, isChecked, label } = props

  const handleOnPress = useCallback(() => {
    onPress(value)
  }, [value, onPress])

  return (
    <TouchableOpacity onPress={handleOnPress} style={styles.container}>
      <View style={styles.radioContainer}>
        {isChecked ? <View style={styles.checkedRadio} /> : null}
      </View>
      {label ? <Text style={styles.label}>{label}</Text> : null}
    </TouchableOpacity>
  )
})
