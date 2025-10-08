import todoItem from './todoItem.js'
import todoData from '../db.js'
// const todoData = localStorage.getItem('todos')
import { database } from './icons.js'

const empty = `<div class="d-flex align-items-center justify-content-center h-100"><div class="text-center">${database()}<h2>Database Empty</h2></div></div>`
const main = () => {
	if (!todoData) return empty
	let todoItems = ''
	todoData.forEach(data => {
		todoItems += todoItem(data)
	})

	return todoItems
}

export default main
