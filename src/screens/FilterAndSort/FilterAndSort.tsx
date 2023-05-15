import React, { useCallback, useLayoutEffect, useMemo, useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { IProps } from './types'

import { styles } from './styles'
import { FILTER_OPTIONS, SORT_OPTIONS } from '../../core/constants'
import { Radio } from '../../components'
import {
  FilterAndSortItemModel,
  FilterAndSortListModel,
  FilterAndSortOptionItemModel,
} from '../../types'

export const FilterAndSortScreen = (props: IProps) => {
  const { navigation } = props
  const [selectedFilters, setSelectedFilters] =
    useState<FilterAndSortListModel>([])
  const [selectedSortOption, setSelectedSortOption] =
    useState<FilterAndSortOptionItemModel | null>(null)

  const isButtonDisabled = useMemo(() => {
    return !selectedFilters.length && selectedSortOption === null
  }, [selectedFilters, selectedSortOption])

  const handleSelectSortOption = useCallback(
    (optionValue: string, sortValue: string) => {
      setSelectedSortOption(
        SORT_OPTIONS.find((el) => el.value === sortValue)?.options.find(
          (el) => el.value === optionValue,
        ) || null,
      )
    },
    [],
  )

  const handleSelectFilterOption = useCallback(
    (optionValue: string, filterValue: string) => {
      const selectedFilter =
        FILTER_OPTIONS.find((el) => el.value === filterValue) ||
        ({} as FilterAndSortItemModel)
      const selectedOption = selectedFilter.options.find(
        (el) => el.value === optionValue,
      )
      setSelectedFilters((old) => [
        ...old.filter((el) => el.value !== filterValue),
        {
          ...selectedFilter,
          options: [...(selectedOption ? [selectedOption] : [])],
        },
      ])
    },
    [],
  )

  const renderRightHeaderButton = useCallback(() => {
    const handleOnPress = () => {
      setSelectedFilters([])
      setSelectedSortOption(null)
    }
    return (
      <TouchableOpacity onPress={handleOnPress}>
        <Text style={styles.rightHeaderButton}>Clear all</Text>
      </TouchableOpacity>
    )
  }, [])

  const handleOnSaveFiltersAndSortingOptions = useCallback(() => {}, [])

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: renderRightHeaderButton,
    })
  }, [navigation, renderRightHeaderButton])

  return (
    <View style={styles.container}>
      <View style={styles.filterAndSortContainer}>
        {SORT_OPTIONS.map((sort) => (
          <View key={sort.value} style={styles.filterAndSortItemContainer}>
            <Text style={styles.title}>{sort.label}</Text>
            <View style={styles.filterAndSortItems}>
              {sort.options.map((option) => (
                <Radio
                  key={option.value}
                  value={option.value}
                  onPress={(optionValue) =>
                    handleSelectSortOption(optionValue, sort.value)
                  }
                  isChecked={selectedSortOption?.value === option.value}
                  label={option.label}
                />
              ))}
            </View>
          </View>
        ))}
        {FILTER_OPTIONS.map((filter) => (
          <View key={filter.value} style={styles.filterAndSortItemContainer}>
            <Text style={styles.title}>{filter.label}</Text>
            <View style={styles.filterAndSortItems}>
              {filter.options.map((option) => {
                const isSelected = Boolean(
                  selectedFilters
                    .find((el) => el.value === filter.value)
                    ?.options.find((el) => el.value === option.value),
                )
                return (
                  <Radio
                    key={option.value}
                    value={option.value}
                    onPress={(optionValue) =>
                      handleSelectFilterOption(optionValue, filter.value)
                    }
                    isChecked={isSelected}
                    label={option.label}
                  />
                )
              })}
            </View>
          </View>
        ))}
      </View>
      <TouchableOpacity
        onPress={handleOnSaveFiltersAndSortingOptions}
        disabled={isButtonDisabled}
        style={[
          styles.saveButton,
          isButtonDisabled
            ? styles.saveDisabledButtonBackground
            : styles.saveButtonBackground,
        ]}
      >
        <Text style={styles.saveButtonTitle}>Save</Text>
      </TouchableOpacity>
    </View>
  )
}
