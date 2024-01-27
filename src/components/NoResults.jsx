import PropTypes from 'prop-types'

const NoResults = (props) => {
    const { handleShowModal, className } = props

    return (
        <div className={`text-center ${className} flex flex-col items-center justify-center`}>
            <h3 className='text-lg text-cyan-800 font-bold tracking-wider uppercase mb-2'>Congrats!! You completed all your tasks!</h3>
            <p className='px-7 mb-3 font-light leading-relaxed'>Well done! You're officially a task ninja. Now, sit back, relax, and bask in the glory of your empty to-do list. 🏖️"</p>
            <p className='mb-3 font-light leading-relaxed'>or, Create a new one</p>
            <button onClick={handleShowModal} className="py-3 px-6 bg-cyan-500 hover:bg-cyan-600 rounded-md text-white">Add Task</button>
        </div>
    )
}

NoResults.propTypes = {
    handleShowModal: PropTypes.func,
    className: PropTypes.string
}

export default NoResults