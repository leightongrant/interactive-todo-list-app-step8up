import todoItem from './todoItem.js'
import noTasks from './noTasks.js'
import type { TodoData } from '../db.js'

const todoData = localStorage.getItem('todos')

const main = (): string => {
	if (typeof todoData === 'string') {
		let todoItems = ''
		JSON.parse(todoData).forEach((data: TodoData) => {
			todoItems += todoItem(data)
		})
		return todoItems
	}
	return noTasks()
}

export default main
