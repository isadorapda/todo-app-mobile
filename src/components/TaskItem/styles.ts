import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#262626',
    borderStyle: 'solid',
    borderColor: '#333333',
    borderWidth: 1,
    borderRadius: 8,
    flexDirection: 'row',
    padding: 12,
    marginHorizontal: 24,
    gap: 12,
    marginBottom: 10,
  },
  taskTitle: {
    color: '#F2F2F2',
    fontSize: 14,
    flex: 1,
  },
  taskTitleChecked: {
    color: '#808080',
    fontSize: 14,
    flex: 1,
    textDecorationLine: 'line-through',
  },
  radioButtonChecked: {
    height: 20,
    width: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    backgroundColor: '#5E60CE',
  },
  radioButtonUnchecked: {
    height: 20,
    width: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    borderStyle: 'solid',
    borderColor: '#4EA8DE',
    borderWidth: 2,
  },
})
