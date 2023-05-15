import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    overflow: 'hidden',
    padding: 8,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: '#aaaaaa',
    backgroundColor: '#ffffff',
  },
  imageContainer: {
    width: 150,
    height: 85,
    marginRight: 8,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: 'bold',
  },
})
