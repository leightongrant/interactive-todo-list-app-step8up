import generateId from './utils/generateId.js'
export type TodoData = {
	id: string
	title: string
	createAt: number
	isCompleted: boolean
}

const todoData: TodoData[] = [
	{
		id: generateId(),
		title: 'Do the dishes',
		createAt: Date.now(),
		isCompleted: false,
	},
	{
		id: generateId(),
		title: 'Buy groceries',
		createAt: Date.now(),
		isCompleted: false,
	},
	{
		id: generateId(),
		title: 'Finish project report',
		createAt: Date.now(),
		isCompleted: true,
	},
	{
		id: generateId(),
		title: 'Call the dentist',
		createAt: Date.now(),
		isCompleted: false,
	},
	{
		id: generateId(),
		title: 'Schedule yoga session',
		createAt: Date.now(),
		isCompleted: true,
	},
	{
		id: generateId(),
		title: 'Read wellness article',
		createAt: Date.now(),
		isCompleted: false,
	},
]

export default todoData
