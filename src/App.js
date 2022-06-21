import { useState } from 'react';
import Field from './components/Field/Field';
import Form from './components/Form/Form';
import { nanoid } from 'nanoid';

function App() {
  let date = new Date()
  // eslint-disable-next-line eqeqeq
  let newDate = localStorage.getItem('date') != date.getDate()
  if (newDate) {
    if (localStorage.getItem('tasks') !== null) {
      let storedTasks = JSON.parse(localStorage.getItem('tasks'))
      const updatedTasks = storedTasks.map(task => {
        return {...task, yesterdayCompleted: task.completed, completed: false}
      })
      localStorage.setItem('tasks', JSON.stringify(updatedTasks))
    }
    localStorage.setItem('date', date.getDate())
  }
  
  const [tasks, setTasks] = useState(localStorage.getItem('tasks') === null ? [] : JSON.parse(localStorage.getItem('tasks')))
  if (tasks === []) {
    localStorage.setItem('tasks', JSON.stringify([]))
  }
  const addTask = (name) => {  
    const newTask = { id: "rem-" + nanoid(), name: name, completed: false, yesterdayCompleted: false}
    localStorage.setItem('tasks', JSON.stringify([...tasks, newTask]))
    setTasks([...tasks, newTask])
  }

  const deleteTask = (id) => {
      const remainingTasks = tasks.filter(task => id !== task.id)
      localStorage.setItem('tasks', JSON.stringify(remainingTasks))
      setTasks(remainingTasks)
  }

  const toggleTaskCompleted  = (id) => {
    const updatedTasks = tasks.map(task => {
    if (id === task.id) {
      return {...task, completed: !task.completed}
    }
    return task;
    });
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks))
    console.log(localStorage.getItem('tasks'));    
  }
 
  const taskList = tasks.map(task => { return <Field id={task.id} name={task.name} key={task.id} completed={task.completed} toggleTaskCompleted={toggleTaskCompleted} yesterdayCompleted={task.yesterdayCompleted} deleteTask={deleteTask}/>} )
  
  return (
    <div className="App">
      <div className="remapp stack-large">
      <h1>Remember updated chores</h1>
      <Form addTask={addTask}/>
      <ul className="rem-list stack-large stack-exception" aria-labelledby="list-heading" 
      >
        {taskList}
      </ul>
    </div>   
    </div>
  );
}

export default App;

