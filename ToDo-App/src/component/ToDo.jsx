import React from 'react';
import { IoMdRemoveCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import '../App.css';

function ToDo({ todo, onRemoveToDo }) {
    const { id, content } = todo;

    const removeTodo = () => {
        onRemoveToDo(id);
    };

    return (
        <div className='todo-main'>
            <p>{content}</p>
            <div>
                <IoMdRemoveCircle className='ToDo-icons' onClick={removeTodo} />
                <FaEdit className='ToDo-icons' />
            </div>
        </div>
    );
}

export default ToDo;
