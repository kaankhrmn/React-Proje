import ToDo from './ToDo'
import { RootState } from '../redux/store'
import { useSelector } from 'react-redux'
import { ToDoType } from '../types/Types'

function ToDoList() {

    const { todos } = useSelector((state: RootState) => state.todo)

    return (
        <>
            <div>
                {
                    todos && todos.map((todo: ToDoType) => (
                        <ToDo key={todo.id} todoProps={todo} />
                    ))
                }
            </div>
        </>
    )
}

export default ToDoList

