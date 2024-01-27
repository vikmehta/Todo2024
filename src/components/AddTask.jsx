import PropTypes from 'prop-types'

const AddTask = (props) => {
    const { textInput, handleInputChange, handleFormSubmit, handleCheckbox } = props

    return (
        <form className="mt-8" onSubmit={(e) => handleFormSubmit(e)}>
            <input
                type="text"
                placeholder="Add new task..."
                required
                value={textInput}
                onChange={(e) => handleInputChange(e)}
                className="block w-full mb-5 bg-gray-200 p-4 text-lg text-gray-700 focus:outline-0 focus:bg-cyan-100" />
            <span className="flex justify-between items-center">
                <span className="space-x-2 flex items-center">
                    <input type="checkbox" name="check" id="formcheck" className="w-5 h-5" onChange={(e) => handleCheckbox(e)} />
                    <label htmlFor="formcheck">Completed</label>
                </span>
                <button type="submit" className="py-3 px-6 bg-cyan-500 hover:bg-cyan-600 rounded-md text-white">Add Task</button>
            </span>
        </form>
    )
}

AddTask.propTypes = {
    textInput: PropTypes.string,
    handleInputChange: PropTypes.func,
    handleFormSubmit: PropTypes.func,
    handleCheckbox: PropTypes.func
}

export default AddTask