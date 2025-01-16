import React from 'react'
import ToDo from './ToDo'
function ToDoList({ ListToDo, onRemoveToDo }) {

    return (
        <div style={{ width: '100%', paddingTop: '50px' }}>
            {
                ListToDo && ListToDo.map((todo) => (
                    <ToDo key={todo.id} todo={todo} onRemoveToDo={onRemoveToDo} />

                ))
            }

        </div>
    )
}

export default ToDoList
