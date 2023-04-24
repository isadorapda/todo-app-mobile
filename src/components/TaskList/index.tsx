import { TouchableOpacity, View, Text, FlatList, Alert } from 'react-native'
import { TaskItem } from '../../screens/Home'
import { Task } from '../TaskItem'
import { styles } from './styles'
import { EmptyComponent } from '../EmptyComponent'
import { useState } from 'react'

interface Props {
  tasks: Array<TaskItem>
  setTasks: (tasks: Array<TaskItem>) => void
}

export function TaskList({ tasks, setTasks }: Props) {
  const [showConcluded, setShowConcluded] = useState(false)
  function handleToggleCheckTask(taskId: string) {
    const copyTasks = tasks.map((task) => {
      return task.id === taskId
        ? { ...task, isComplete: !task.isComplete }
        : task
    })
    setTasks(copyTasks)
  }
  const completedTasks = tasks.filter((task) => task.isComplete)

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
    <>
      <View style={styles.listOptions}>
        <TouchableOpacity
          style={styles.lists}
          onPress={() => setShowConcluded(false)}
        >
          <Text style={styles.listAll}>All</Text>
          <View style={styles.countContainer}>
            <Text style={styles.listCount}>{tasks.length}</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.lists}
          onPress={() => setShowConcluded(true)}
        >
          <Text style={styles.listConcluded}>Concluded</Text>
          <View style={styles.countContainer}>
            <Text style={styles.listCount}>{completedTasks.length}</Text>
          </View>
        </TouchableOpacity>
      </View>

      <FlatList
        keyExtractor={(task) => task.id}
        data={showConcluded ? completedTasks : tasks}
        ListEmptyComponent={<EmptyComponent />}
        renderItem={({ item }) => (
          <Task
            task={item}
            onDelete={handleDeleteTask}
            onToggle={handleToggleCheckTask}
          />
        )}
      />
    </>
  )
}
