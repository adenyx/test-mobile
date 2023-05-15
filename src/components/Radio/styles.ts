import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 4,
  },
  radioContainer: {
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 4,
    borderWidth: 1,
    borderColor: '#007AFF',
    borderRadius: 20,
  },
  checkedRadio: {
    width: 12,
    height: 12,
    borderRadius: 12,
    backgroundColor: '#007AFF',
  },
  label: {},
})
