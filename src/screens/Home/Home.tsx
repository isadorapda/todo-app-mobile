import {
  Alert,
  FlatList,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import 'react-native-get-random-values'
import { v4 as uuidv4 } from 'uuid'
import { styles } from './styles'
import { Ionicons } from '@expo/vector-icons'
import { useState } from 'react'
import { Task } from '../../components/Task/Task'

export interface TaskItem {
  title: string
  id: string
}
export function Home() {
  const [newTaskTitle, setNewTaskTitle] = useState<string>('')
  const [tasks, setTasks] = useState<Array<TaskItem>>([])

  function handleAddTask() {
    setTasks([
      ...tasks,
      {
        title: newTaskTitle,
        id: uuidv4(),
      },
    ])
  }

  function handleDeleteTask(taskId: string) {
    const tasksIds = tasks.map((task) => task.id)
    if (tasksIds.includes(taskId)) {
      Alert.alert('Delete task', 'Do you want to delete this task?', [
        {
          text: 'Delete',
          onPress: () => setTasks(tasks.filter((task) => task.id !== taskId)),
        },
        {
          text: 'Cancel',
          style: 'cancel',
        },
      ])
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add new task"
          placeholderTextColor={'#808080'}
          onChangeText={setNewTaskTitle}
        />
        <TouchableOpacity style={styles.button} onPress={handleAddTask}>
          <Ionicons name="add-circle-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <FlatList
        keyExtractor={(task) => task.id}
        data={tasks}
        renderItem={({ item }) => (
          <Task task={item} onDelete={handleDeleteTask} />
        )}
      />
    </View>
  )
}
