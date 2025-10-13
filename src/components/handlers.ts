import type { TodoData } from '../types.js'
import generateId from '../utils/generateId.js'
import todoItem from './todoItem.js'
import noTasks from './noTasks.js'
/*
export const handleCompleted = () => {
	const completedBtns = Array.from(document.querySelectorAll('div[name=completed]') as NodeListOf<HTMLDivElement>)
	completedBtns.forEach(btn => {
		btn.addEventListener('click', e => {
			const target = e.target as HTMLDivElement
			const id = target.parentElement?.id

			const todoData = localStorage.getItem('todos')
			if (typeof todoData === 'string') {
				const dataToUpdate = JSON.parse(todoData) as TodoData[]
				const updatedTodos = dataToUpdate.map((todo: TodoData) => {
					if (todo.id === id) {
						return { ...todo, isCompleted: !todo.isCompleted }
					}
					return todo
				})

				localStorage.setItem('todos', JSON.stringify(updatedTodos))
				console.log('Task marked as completed or incomplete')
				location.reload()
			}
		})
	})
}
*/
export const markCompleted = (id: string) => {
	try {
		const todoData = localStorage.getItem('todos')
		if (!todoData) throw new Error('Data not found!')
		const data = JSON.parse(todoData) as TodoData[]
		const newData = data.map((todo: TodoData) => {
			if (todo.id === id) {
				return { ...todo, isCompleted: !todo.isCompleted }
			}
			return todo
		})
		localStorage.setItem('todos', JSON.stringify(newData))
	} catch (error: any) {
		console.log(error.message)
	}
}

export const saveNewTask = (title: string) => {
	const newTask: TodoData = {
		id: generateId(),
		title: title,
		isCompleted: false,
		createAt: Date.now(),
	}

	try {
		const todoData = localStorage.getItem('todos')
		if (!todoData) {
			localStorage.setItem('todos', JSON.stringify([newTask]))
			return
		}
		const data = JSON.parse(todoData) as TodoData[]
		data.push(newTask)
		localStorage.setItem('todos', JSON.stringify(data))
	} catch (error: any) {
		console.log(error.message)
	}
}

export const handleDelete = (id: string) => {
	try {
		const todoData = localStorage.getItem('todos')
		if (!todoData) throw new Error('Todo data not found in localstorage')
		const data = JSON.parse(todoData) as TodoData[]
		const newData = data.filter((todo: TodoData) => todo.id !== id)
		localStorage.setItem('todos', JSON.stringify(newData))
	} catch (error: any) {
		console.log(error.message)
	}
}

export const handleSave = (id: string, text: string) => {
	try {
		const todoData = localStorage.getItem('todos')
		if (!todoData) throw new Error('Tasks not found')
		const todos = JSON.parse(todoData) as TodoData[]
		const selectedTask = todos.find((task: TodoData) => task.id === id) as TodoData
		const editedTask = { ...selectedTask, title: text }
		const newData = todos.filter((todo: TodoData) => todo.id !== id)
		newData.push(editedTask)
		localStorage.setItem('todos', JSON.stringify(newData))
	} catch (error: any) {
		console.log(error.message)
	}
}

export const renderTasks = (timestamp = Date.now()): string => {
	const currentDaySpan = document.querySelector('.current-day') as HTMLSpanElement
	currentDaySpan.innerText = new Date(timestamp).toDateString()

	let todoData = localStorage.getItem('todos')
	if (typeof todoData === 'string') {
		if (JSON.parse(todoData).length === 0) return noTasks()

		let todoItems = ''
		const date = new Date(timestamp).toLocaleDateString()
		const todoDataParsed = JSON.parse(todoData) as TodoData[]
		const filteredData = todoDataParsed.filter((todo: TodoData) => {
			const taskDate = new Date(todo.createAt).toLocaleDateString()
			return taskDate === date
		})

		if (filteredData.length === 0) return noTasks()

		filteredData.forEach((data: TodoData) => {
			todoItems += todoItem(data)
		})

		return `<div class="d-flex flex-column gap-3">${todoItems}</div>`
	}
	return noTasks()
}

export const renderMainContent = (container: HTMLDivElement, content: string) => {
	container.innerHTML = ''
	container.innerHTML = content
	// handleCompleted()
	// handleNewTasks()
}
