import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D0D',
    gap: 30,
  },
  headerContainer: {
    marginTop: 100,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  header: {
    fontSize: 50,
    fontWeight: '800',
  },
  headerDo: {
    color: '#5E60CE',
  },
  headerTo: {
    color: '#4EA8DE',
  },
  inputContainer: {
    marginTop: 10,
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
    color: '#F2F2F2',
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
