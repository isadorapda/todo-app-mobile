import { View, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { styles } from './styles'
import { TaskItem } from '../../screens/Home/Home'

interface Props {
  task: TaskItem
  onDelete: (taskId: string) => void
}

export function Task({ task, onDelete }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.taskTitle}>{task.title}</Text>
      <Ionicons
        name="md-trash-outline"
        size={20}
        color="#F2F2F2"
        onPress={() => onDelete(task.id)}
      />
    </View>
  )
}
