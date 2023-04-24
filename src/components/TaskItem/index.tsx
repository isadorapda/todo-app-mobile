import { View, Text, TouchableOpacity } from 'react-native'
import {
  Ionicons,
  MaterialCommunityIcons as IconCheck,
} from '@expo/vector-icons'
import { styles } from './styles'
import { TaskItem } from '../../screens/Home'

interface Props {
  task: TaskItem
  onDelete: (taskId: string) => void
  onToggle: (taskId: string) => void
}

export function Task({ task, onDelete, onToggle }: Props) {
  return (
    <View style={styles.container}>
      {task.isComplete ? (
        <TouchableOpacity
          style={styles.radioButtonChecked}
          onPress={() => onToggle(task.id)}
        >
          <IconCheck name="check" color="#F2F2F2" />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.radioButtonUnchecked}
          onPress={() => onToggle(task.id)}
        />
      )}

      <Text
        style={task.isComplete ? styles.taskTitleChecked : styles.taskTitle}
      >
        {task.title}
      </Text>
      <Ionicons
        name="md-trash-outline"
        size={20}
        color="#F2F2F2"
        onPress={() => onDelete(task.id)}
      />
    </View>
  )
}
