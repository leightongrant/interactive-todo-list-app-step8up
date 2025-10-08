import todoItem from './todoItem.js'
import todoData from '../db.js'

const main = () => {
	let todoItems = ''
	todoData.forEach(data => {
		todoItems += todoItem(data)
	})

	return todoItems
}

export default main
