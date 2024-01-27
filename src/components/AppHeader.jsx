import PropTypes from 'prop-types'
import Progressbar from './Progressbar'

const AppHeader = (props) => {
    const { percent, appName } = props

    return (
        <header className='bg-gray-100 fixed left-0 right-0 top-0 border-b'>
            <div className='max-w-lg m-auto p-3'>
                <h2 className='text-center text-2xl font-bold mb-3 uppercase tracking-wide text-cyan-700'>{appName}</h2>
                <Progressbar percent={percent} />
            </div>
        </header>
    )
}

AppHeader.propTypes = {
    appName: PropTypes.string,
    percent: PropTypes.number
}

AppHeader.defaultProps = {
    appName: 'Task Manager'
}

export default AppHeader