import PropTypes from 'prop-types'
import { MdClose } from "react-icons/md";

const Modal = (props) => {
    const { children, handleCloseModal } = props

    return (
        <div className="modalOverlay fixed top-0 bottom-0 left-0 right-0 inset-0 flex justify-center items-center bg-gray-500/90" onClick={handleCloseModal}>
            <div className="modal max-w-lg w-full m-auto px-6 py-10 md:p-10 relative bg-white shadow-md rounded-md" onClick={(e) => e.stopPropagation()}>
                <span onClick={handleCloseModal} className='absolute top-8 right-8 cursor-pointer'><MdClose /></span>
                {children}
            </div>
        </div>
    )
}

Modal.propTypes = {
    children: PropTypes.element,
    handleCloseModal: PropTypes.func
}

export default Modal