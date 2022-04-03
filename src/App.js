import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { isCursorAtStart } from '@testing-library/user-event/dist/utils';

function App() {
  let date = new Date()
  let newDate = localStorage.getItem('date') != date.getDate()
  if (newDate) {
    localStorage.removeItem('s1')
    localStorage.removeItem('s2')
    localStorage.setItem('date', date.getDate())
  }
  
  const [s1, setS1] = useState((localStorage.getItem('s1') !== null && localStorage.getItem('s1') !== "") ? "Today's timetable updated" : "")

  return (
    <div className="App">
      <button onClick={() => {
        localStorage.setItem('s1', "Today's timetable updated")
        setS1("Today's timetable updated")
      }}>Updated timetable</button>
      <h1>{ s1 }</h1>
      
    </div>
  );
}

export default App;

