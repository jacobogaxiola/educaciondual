import React from "react"

const Form = ({ handleChange, addTask, tarea}) => {
    return (
        <div>
            <form onSubmit={addTask}>
                <input type="text" value={tarea} placeholder="ingresa tarea..." onChange={handleChange}/>
                <button type="submit">Agregar tarea</button>
            </form>
        </div>
    )
}

export {Form}