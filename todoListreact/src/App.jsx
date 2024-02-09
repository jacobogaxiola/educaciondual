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
    const nuevaTarea = {
      id: Date.now(),
      tarea,
      completada: false
    }
    const totalTareas =[nuevaTarea, ...tareas]
    setTareas(totalTareas);
    setTarea("")
  }
  const borrarTarea = id =>{
    const tareasActualizadas = tareas.filter(tarea =>{
      return tarea.id != id
    })
    setTarea(tareasActualizadas)
  }
  return (
    <>
     <h2>todo list</h2>
     <fron
     handleChange = {handleChange}
     tarea = {tarea} 
     />
     {tareas.length>1&&(
      <button onClick={()=>setTareas([])}>vacias tareas</button>
     )}
     {tareas.map(tarea =>(
      <Task
      key = {tarea.id}
      id = {tarea.id}
      tarea = {tarea}
      borrartarea = {borrarTarea}
      />
     ))}
    
    </>
  )
}

export default App
