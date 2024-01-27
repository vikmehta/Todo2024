import PropTypes from 'prop-types'
import { IoMdAdd } from "react-icons/io";

const Footer = (props) => {
    const { totalTasks, totalCompletedTasks, handleShowModal, className } = props

    return (
        <div className={`${className} bg-gray-100`}>
            <div className='max-w-lg m-auto flex justify-between p-5 uppercase border-t'>
                <span className='tracking-wider text-gray-500 text-sm font-medium'>{totalCompletedTasks} / {totalTasks} completed</span>
                <span className='flex items-center space-x-1 cursor-pointer text-cyan-700 hover:text-cyan-900 font-bold tracking-wide' onClick={handleShowModal}>
                    <IoMdAdd /><span>Add New</span>
                </span>
            </div>
        </div>
    )
}

Footer.propTypes = {
    totalTasks: PropTypes.number,
    totalCompletedTasks: PropTypes.number,
    className: PropTypes.string,
    handleShowModal: PropTypes.func
}

Footer.defaultProps = {
    totalTasks: 0,
    totalCompletedTasks: 0
}

export default Footer