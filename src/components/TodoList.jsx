import PropTypes from 'prop-types'
import TodoItem from './TodoItem'

const TodoList = (props) => {
    const { tasks, markComplete, deleteTask, className } = props

    return (
        <div className={`todoList px-2 py-2 pb-20 ${className}`}>
            {tasks.map((item) => {
                return <TodoItem key={item.id} {...item} markComplete={markComplete} deleteTask={deleteTask} />
            })}
        </div>
    )
}

TodoList.propTypes = {
    tasks: PropTypes.array.isRequired,
    markComplete: PropTypes.func,
    deleteTask: PropTypes.func,
    className: PropTypes.string
}

TodoList.defaultProps = {
    tasks: []
}

export default TodoList