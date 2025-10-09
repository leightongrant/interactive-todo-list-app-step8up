// import todoData from '../db.js'
import type { TodoData } from '../db.js'
import generateId from '../utils/generateId.js'

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

export const handleNewTasks = () => {
	const newTaskBtn = document.querySelector('div[name=new]') as HTMLDivElement
	newTaskBtn.addEventListener('click', (e: Event) => {
		const target = e.target as HTMLDivElement
		const input = target.parentElement?.firstElementChild as HTMLInputElement

		if (!input.value) throw new Error('No new task to save')

		const re = /[a-zA-Z0-9]+/gi
		const taskTitle = input.value.match(re)?.join(' ')

		if (taskTitle) {
			const newTask: TodoData = { id: generateId(), title: taskTitle, isCompleted: false, createAt: Date.now() }

			if (!localStorage.getItem('todos')) {
				localStorage.setItem('todos', JSON.stringify([newTask]))
				console.log('Saved new todo item')
				input.value = ''
				location.reload()
				return
			}

			const todoData = localStorage.getItem('todos')
			if (typeof todoData === 'string') {
				const newData = JSON.parse(todoData) as TodoData[]
				newData.push(newTask)
				localStorage.setItem('todos', JSON.stringify(newData))
				console.log('Saved new todo item')
				input.value = ''
				location.reload()
			}
		}
	})
}

export const handleDelete = () => {
	const deleteBtns = Array.from(document.querySelectorAll('div[name=delete]') as NodeListOf<HTMLButtonElement>)
	deleteBtns.forEach((btn: HTMLButtonElement) => {
		btn.addEventListener('click', (e: Event) => {
			const target = e.target as HTMLDivElement
			const id = target.parentElement?.id
			const todoData = localStorage.getItem('todos')
			if (typeof todoData === 'string') {
				const dataToDelete = JSON.parse(todoData) as TodoData[]
				const newData = dataToDelete.filter((todo: TodoData) => todo.id !== id)
				localStorage.setItem('todos', JSON.stringify(newData))
				location.reload()
				console.log('Task deleted')
			}
		})
	})
}
