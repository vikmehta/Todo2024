import PropTypes from 'prop-types'
import { MdClose, MdModeEdit } from "react-icons/md";

const TodoItem = (props) => {
    const { id, text, completed, markComplete, deleteTask } = props

    return (
        <div className='flex flex-start px-2 py-3 items-center'>
            <input type="checkbox" name="completed" id={id} className="w-5 h-5 mr-4" checked={completed} onChange={() => markComplete(id)} />
            <label className={`flex-1 font-light ${completed ? 'text-gray-300 line-through' : 'text-cyan-700'}`} htmlFor={id}>{text}</label>
            <div className='flex items-center space-x-4'>
                <button className='w-8 h-8 rounded-md flex items-center justify-center text-white bg-cyan-500 hover:bg-cyan-600'><MdModeEdit /></button>
                <button className='w-8 h-8 rounded-md flex items-center justify-center text-white bg-cyan-500 hover:bg-cyan-600' onClick={() => deleteTask(id)}><MdClose /></button>
            </div>
        </div>
    )
}

TodoItem.propTypes = {
    id: PropTypes.string,
    text: PropTypes.string,
    completed: PropTypes.bool,
    markComplete: PropTypes.func,
    deleteTask: PropTypes.func
}

export default TodoItem