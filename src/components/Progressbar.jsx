import PropTypes from 'prop-types'

const Progressbar = (props) => {
    const { percent } = props

    return (
        <>
            <div className='flex justify-between'>
                <span className='text-sm font-medium text-gray-500 uppercase tracking-wider'>Tasks Completed</span>
                <span className='text-sm font-medium text-gray-500'>{percent}%</span>
            </div>
            <div className='h-3 bg-gray-200 rounded-md'>
                <div className='h-3 bg-cyan-500 rounded-md' style={{ width: `${percent}%` }} />
            </div>
        </>
    )
}

Progressbar.propTypes = {
    percent: PropTypes.number
}

Progressbar.defaultProps = {
    percent: 0
}

export default Progressbar