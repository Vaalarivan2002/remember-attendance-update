import { useState } from 'react';
import Field from './components/Field/Field';
import Form from './components/Form/Form';
import { nanoid } from 'nanoid';

function App() {
  let date = new Date()
  let newDate = localStorage.getItem('date') != date.getDate()

  if (newDate) {
    let storedTasks = JSON.parse(localStorage.getItem('tasks'))
    if (storedTasks !== null) {
      const updatedTasks = storedTasks.map(task => {
        return {...task, completed: false}
      })
      localStorage.setItem('tasks', updatedTasks)
    }
    localStorage.setItem('date', date.getDate())
  }

  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) === null ? [] : JSON.parse(localStorage.getItem('tasks')))
  
  const addTask = (name) => {  
    const newTask = { id: "rem-" + nanoid(), name: name, completed: false}
    localStorage.setItem('tasks', JSON.stringify([...tasks, newTask]))
    setTasks([...tasks, newTask])
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
    console.log(updatedTasks);
  }
 
  const taskList = tasks.map(task => { return <Field id={task.id} name={task.name} key={task.id} completed={task.completed} toggleTaskCompleted={toggleTaskCompleted} />} )
  
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

