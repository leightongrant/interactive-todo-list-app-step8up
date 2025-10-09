import todoItem from './todoItem.js'
import noTasks from './noTasks.js'
import type { TodoData } from '../types.js'

const todoData = localStorage.getItem('todos')

const main = (): string => {
	if (typeof todoData === 'string') {
		if (JSON.parse(todoData).length === 0) {
			return noTasks()
		}
		let todoItems = ''
		JSON.parse(todoData).forEach((data: TodoData) => {
			todoItems += todoItem(data)
		})
		return `<div class="d-flex flex-column gap-3">${todoItems}</div>`
	}
	return noTasks()
}

export default main
