import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  rightHeaderButton: {
    color: '#007AFF',
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 16,
  },
  filterAndSortContainer: {},
  filterAndSortItemContainer: {
    marginBottom: 16,
  },
  filterAndSortItems: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  saveButton: {
    width: '100%',
    height: 54,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
  },
  saveButtonBackground: {
    backgroundColor: '#007AFF',
  },
  saveDisabledButtonBackground: {
    backgroundColor: '#8E8E93',
  },
  saveButtonTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#ffffff',
  },
})
