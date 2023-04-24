import { StatusBar } from 'react-native'
import { Home } from './src/screens/Home/Home'

export default function App() {
  return (
    <>
      <StatusBar
        backgroundColor="transparent"
        translucent
        barStyle="light-content"
      />
      <Home />
    </>
  )
}
