import type { TodoData } from '../types.js'
import generateId from '../utils/generateId.js'
import todoItem from './todoItem.js'
import noTasks from './noTasks.js'

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

export const setCurrentDay = (timestamp: number) => {
	const currentDaySpan = document.querySelector('.current-day') as HTMLSpanElement
	currentDaySpan.innerText = ''
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
			const newTask: TodoData = {
				id: generateId(),
				title: taskTitle,
				isCompleted: false,
				createAt: Date.now(),
			}

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

export const handleEdit = () => {
	const editBtns = Array.from(document.querySelectorAll('div[name=edit]') as NodeListOf<HTMLButtonElement>)

	editBtns.forEach((btn: HTMLButtonElement) => {
		let editMode = false
		btn.addEventListener('click', (e: Event) => {
			const target = e.target as HTMLDivElement
			const id = target.parentElement?.id
			const nodes = target.parentElement?.childNodes as NodeListOf<ChildNode>
			const icon = nodes[5] as HTMLDivElement
			const textarea = nodes[3] as HTMLTextAreaElement

			editMode = !editMode

			if (editMode) {
				textarea.removeAttribute('readonly')
				textarea.focus()
				textarea.setSelectionRange(textarea.value.length, textarea.value.length)
				icon.classList.remove('bi-pencil-fill')
				icon.classList.add(...['bi-floppy-fill', 'text-success'])
				return
			}

			textarea.setAttribute('readonly', '')
			icon.classList.remove(...['bi-floppy-fill', 'text-success'])
			icon.classList.add(...['bi-pencil-fill'])
			const todoData = localStorage.getItem('todos')
			if (typeof todoData === 'string') {
				const todos = JSON.parse(todoData) as TodoData[]
				const currentTask = todos.find((currentTask: TodoData) => currentTask.id === id) as TodoData
				const editedTask = { ...currentTask, title: textarea.value }
				const updatedTodos = todos.filter((todo: TodoData) => todo.id !== id)
				updatedTodos.push(editedTask)
				localStorage.setItem('todos', JSON.stringify(updatedTodos))
				location.reload()
				console.log('Task saved')
			}
		})
	})
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
	handleCompleted()
	handleEdit()
	handleNewTasks()
}
