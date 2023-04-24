import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  listOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 24,
  },
  lists: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  listAll: {
    fontSize: 18,
    fontWeight: '800',
    color: '#4EA8DE',
  },
  listConcluded: {
    fontSize: 18,
    fontWeight: '800',
    color: '#8284FA',
  },
  countContainer: {
    backgroundColor: '#333333',
    borderRadius: 999,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  listCount: {
    color: '#D9D9D9',
    fontWeight: '600',
    fontSize: 18,
  },
})
