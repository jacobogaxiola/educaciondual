import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Task} from './components/task'
import {fron} from './components/fron'

function App() {
  const [tarea, setTarea] = useState('');
  const [tareas, setTareas] = useState({});

  const handleChange = e =>{
    setTarea(e.target.value)
  }

  const addTask = e => {
    e.prevenDefault();
    if(tarea.trim()===''){
      alert('Debes agregar algo')
      return;
    }
  }
  return (
    <>
     <h2>todo list</h2>
     <fron
     handleChange = {handleChange}
     tarea = {tarea} 
     />
    </>
  )
}

export default App
