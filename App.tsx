import {StatusBar} from 'expo-status-bar';
import {
  FlatList,
  ListRenderItem,
  StyleSheet,
  Text, TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import {useCallback, useState} from "react";

type TaskType = {
  id: number
  title: string
  isDone: boolean
}

export default function App() {
  const [tasks, setTasks] = useState<TaskType[]>([
      {id: 1, title: 'HTML', isDone: true},
      {id: 2, title: 'CSS', isDone: true},
      {id: 3, title: 'React-native', isDone: false},
    ]
  )
  const [value, setValue] = useState('')

  const addTask = () => {
    const newTask: TaskType = {
      id: new Date().getTime(),
      title: value,
      isDone: false
    }
    setTasks([newTask, ...tasks])
    setValue('')
  }

  const removeTask = (id: number) => {
    setTasks(tasks.filter((el) => id !== el.id))
  }

  const updateTask = (id: number) => {
    setTasks(tasks.map((el) => id === el.id ? {...el, isDone: !el.isDone} : el))
  }

  const render: ListRenderItem<TaskType> = useCallback(({item}) => {
    return (
      <TouchableOpacity
        style={[styles.item, {backgroundColor: item.isDone ? '#00fd09' : '#e56c6c'}]}
        onPress={() => updateTask(item.id)}
      >
        <Text style={styles.title}>{item.title}</Text>
        <View>
          <TouchableOpacity onPress={() => removeTask(item.id)}>
            <Text>X</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    )
  }, [addTask, removeTask, updateTask])

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={setValue}
        />
        <TouchableOpacity style={styles.buttonAdd} onPress={addTask}>
          <Text>ADD</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={tasks}
        renderItem={render}
      />
      <StatusBar style={'auto'}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
    backgroundColor: '#fff',
    paddingHorizontal: 20
  },
  item: {
    borderWidth: 1,
    marginVertical: 5,
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    color: '#fff',
    fontWeight: '700',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  input: {
    borderWidth: 1,
    flexGrow: 1,
    marginRight: 30,
    fontSize: 18,
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5
  },
  buttonAdd: {
    borderWidth: 1,
    justifyContent: 'center',
    paddingHorizontal: 15,
    borderRadius: 5
  }
});
