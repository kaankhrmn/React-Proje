import { MdDelete } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import '../css/ToDoCss.css'
import { ToDoType } from "../types/Types";
import { useDispatch } from "react-redux";
import { removeTodoById, updateToDo } from "../redux/slice/ToDoSlice";
import { useState } from "react";

interface TodoProps {
    todoProps: ToDoType
}

function ToDo({ todoProps }: TodoProps) {
    const { id, content } = todoProps

    const dispatch = useDispatch()

    const handleRemoveToDo = () => {
        dispatch(removeTodoById(id))
    }

    const handleUpdateToDo = () => {
        const payload: ToDoType = {
            id: id,
            content: newTodo
        }
        dispatch(updateToDo(payload))
        seteditable(false)
    }

    const [editable, seteditable] = useState<boolean>(false);
    const [newTodo, setnewTodo] = useState<string>(content);
    return (
        <div className='todo'>
            {
                editable ? <input type="text" className="input-edit" value={newTodo} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setnewTodo(e.target.value)} /> : <div>{content}</div>


            }
            <div className="icon" >
                <MdDelete onClick={handleRemoveToDo} />
                {
                    editable ? <FaCheck onClick={handleUpdateToDo} /> : <FaEdit onClick={() => seteditable(!editable)} />
                }

            </div>
        </div>
    )
}

export default ToDo

