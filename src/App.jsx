import { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'
import Confetti from 'react-confetti'
import TodoList from './components/TodoList'
import { todos } from './data/data'
import AppHeader from './components/AppHeader'
import Footer from './components/Footer'
import Modal from './components/Modal'
import AddTask from './components/AddTask'
import sound from './data/applause.mp3'

const App = () => {
	const [tasks, setTasks] = useState([])
	const [showModal, setShowModal] = useState(false)
	const [textInput, setTextInput] = useState('')
	const [inputChecked, setInputChecked] = useState(false)
	const [showConfetti, setShowConfetti] = useState(false)

	const play = () => {
		new Audio(sound).play()
	}

	useEffect(() => {
		setTasks(todos)
	}, [])

	useEffect(() => {
		const totalTasks = tasks.length || 0
		const completedTasks = Array.isArray(tasks) ? tasks.filter((item) => item.completed) : []
		const totalCompletedTasks = completedTasks.length || 0
		if (totalTasks > 0 && totalTasks === totalCompletedTasks) {
			play()
			setShowConfetti(true)
		}
	}, [tasks])

	useEffect(() => {
		if (showConfetti) {
			setTimeout(() => {
				setShowConfetti(false)
			}, 8000)
		}
	}, [showConfetti])

	const totalTasks = tasks.length || 0
	const completedTasks = Array.isArray(tasks) ? tasks.filter((item) => item.completed) : []
	const totalCompletedTasks = completedTasks.length || 0
	const percent = totalTasks > 0 ? parseInt(Math.floor((totalCompletedTasks / totalTasks) * 100)) : 0

	const markComplete = (id) => {
		const updatedTasks = tasks.map((item) => {
			return item.id === id ? { ...item, completed: !item.completed } : item
		})
		setTasks(updatedTasks)
	}

	const deleteTask = (id) => {
		const updatedTasks = tasks.filter((item) => item.id !== id)
		setTasks(updatedTasks)
	}

	const handleShowModal = () => {
		setShowModal(true)
	}

	const handleCloseModal = () => {
		setShowModal(false)
	}

	const handleInputChange = (e) => {
		setTextInput(e.target.value)
	}

	const handleCheckbox = (e) => {
		setInputChecked(e.target.checked)
	}

	const handleFormSubmit = (e) => {
		e.preventDefault()
		setTasks([{ id: nanoid(), text: textInput, completed: inputChecked }, ...tasks])
		setTextInput('')
		setInputChecked(false)
		setShowModal(false)
	}

	return (
		<div className='max-w-lg m-auto flex flex-col min-h-screen pt-28'>
			<AppHeader percent={percent} />
			{showConfetti && <Confetti />}
			<TodoList
				tasks={tasks}
				markComplete={markComplete}
				deleteTask={deleteTask}
				className="flex-1"
			/>
			<Footer
				totalTasks={totalTasks}
				totalCompletedTasks={totalCompletedTasks}
				handleShowModal={handleShowModal}
				className="fixed bottom-0 left-0 right-0"
			/>
			{showModal && (
				<Modal handleCloseModal={handleCloseModal}>
					<AddTask
						textInput={textInput}
						handleInputChange={handleInputChange}
						handleFormSubmit={handleFormSubmit}
						handleCheckbox={handleCheckbox}
					/>
				</Modal>
			)}
		</div>
	)
}

export default App
