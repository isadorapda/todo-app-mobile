import { TextInput, TouchableOpacity, View, Text } from 'react-native'
import 'react-native-get-random-values'
import { v4 as uuidv4 } from 'uuid'
import { styles } from './styles'
import { Ionicons } from '@expo/vector-icons'
import { useState } from 'react'
import { TaskList } from '../../components/TaskList'

export interface TaskItem {
  title: string
  id: string
  isComplete: boolean
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
        isComplete: false,
      },
    ])
    setNewTaskTitle('')
  }
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={[styles.header, styles.headerTo]}>to</Text>
        <Text style={[styles.header, styles.headerDo]}>do</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add new task"
          placeholderTextColor={'#808080'}
          onChangeText={setNewTaskTitle}
          value={newTaskTitle}
        />
        <TouchableOpacity style={styles.button} onPress={handleAddTask}>
          <Ionicons name="add-circle-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <TaskList tasks={tasks} setTasks={setTasks} />
    </View>
  )
}
