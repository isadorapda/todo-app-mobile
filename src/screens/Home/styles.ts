import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D0D',
    gap: 100,
  },
  inputContainer: {
    marginTop: 142,
    flexDirection: 'row',
    width: '100%',
    gap: 4,
    paddingHorizontal: 24,
  },
  input: {
    backgroundColor: '#262626',
    borderRadius: 6,
    flex: 1,
    paddingLeft: 16,
  },
  button: {
    width: 52,
    height: 52,
    backgroundColor: '#1E6F9F',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
