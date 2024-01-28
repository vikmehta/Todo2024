import PropTypes from 'prop-types'
import TodoItem from './TodoItem'

const TodoList = (props) => {
    const { tasks, markComplete, deleteTask, updateTask, className } = props

    return (
        <div className={`todoList px-2 py-2 pb-20 ${className}`}>
            {tasks.map((item) => {
                return (
                    <TodoItem
                        key={item.id}
                        {...item}
                        markComplete={markComplete}
                        deleteTask={deleteTask}
                        updateTask={updateTask}
                    />)
            })}
        </div>
    )
}

TodoList.propTypes = {
    tasks: PropTypes.array.isRequired,
    markComplete: PropTypes.func,
    deleteTask: PropTypes.func,
    updateTask: PropTypes.func,
    className: PropTypes.string
}

TodoList.defaultProps = {
    tasks: []
}

export default TodoList