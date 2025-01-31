import '../css/ToDoCreateCss.css'
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { ToDoType } from '../types/Types';
import { createToDo } from '../redux/slice/ToDoSlice';
function ToDoCreate() {

    const dispatch = useDispatch();

    const [newTodo, setNewTodo] = useState<string>('')

    const handleCreateTodo = () => {
        if (newTodo.trim().length == 0) {
            alert('ToDo giriniz.')
            return;
        }
        const payload: ToDoType = {
            id: Math.floor(Math.random() * 9999999),
            content: newTodo
        }
        dispatch(createToDo(payload))
        setNewTodo('')
    }





    return (
        <>
            <div className='todo-create'>
                <input value={newTodo} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewTodo(e.target.value)} className='input' type="text" placeholder="Enter your task" />
                <Button onClick={handleCreateTodo} style={{ marginTop: '10px', cursor: 'pointer' }} variant="contained" color="primary">Oluştur</Button>
            </div>
        </>
    )
}

export default ToDoCreate
