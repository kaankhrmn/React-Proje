import React, { useState } from 'react'
import '../App.css'

function ToDoCreate({ onCreateTodo }) {

    const [newTodo, setnewTodo] = useState('');

    const ClearInput = () => {
        setnewTodo('')
    }

    const createTodo = () => {
        if (!newTodo) return;

        const request = {
            id: Math.floor(Math.random() * 99999999999),
            content: newTodo
        }
        onCreateTodo(request)
        ClearInput();
    }

    return (
        <>
            <div className='ToDo-create'>
                <input value={newTodo} onChange={(e) => setnewTodo(e.target.value)} className='ToDo-input' type='text' placeholder='ToDo giriniz' />
                <button onClick={createTodo} className='ToDo-create-button' type='button'>ToDo Oluştur</button>
            </div>

        </>
    )
}

export default ToDoCreate
