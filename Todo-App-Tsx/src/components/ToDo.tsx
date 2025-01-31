import { MdDelete } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import '../css/ToDoCss.css'

function ToDo() {
    return (
        <div className='todo'>
            <div>

            </div>
            <div className="icon" >
                <MdDelete />
                <FaEdit />
            </div>
        </div>
    )
}

export default ToDo

