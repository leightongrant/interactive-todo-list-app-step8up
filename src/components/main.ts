import todoItem from './todoItem.js'

const todos = [
	'Do the dishes',
	'Do the shopping',
	'Walk the dog',
	'Swimming Lesson',
	'Clean the car',
	'Do the laundry',
	'Study for my exams',
	'todo',
	'todo',
	'todo',
	'todo',
]

const main = () => {
	let todoItems = ''
	todos.forEach(item => {
		todoItems += todoItem(item)
	})

	return todoItems
}

export default main
