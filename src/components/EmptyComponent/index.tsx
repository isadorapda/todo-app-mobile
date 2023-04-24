import { Text, View } from 'react-native'
import { SimpleLineIcons } from '@expo/vector-icons'
import { styles } from './styles'

export function EmptyComponent() {
  return (
    <View style={styles.container}>
      <SimpleLineIcons name="note" size={32} color="#808080" />
      <Text style={styles.content}>You have no tasks added</Text>
    </View>
  )
}
