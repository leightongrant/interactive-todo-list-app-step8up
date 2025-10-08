import todoData from '../db.js'

export const handleCompleted = () => {
	const completedBtns = Array.from(document.querySelectorAll('div[name=completed]') as NodeListOf<HTMLDivElement>)
	completedBtns.forEach(btn => {
		btn.addEventListener('click', e => {
			const target = e.target as HTMLDivElement
			const id = target.parentElement?.id
			const todos = todoData.map(todo => {
				if (todo.id === id) {
					return { ...todo, isCompleted: !todo.isCompleted }
				}
				return todo
			})

			console.log(todoData)
			console.log(todos)
		})
	})
}

export const handleNewTasks = () => {
	const newTaskBtn = document.querySelector('div[name=new]') as HTMLDivElement
	newTaskBtn.addEventListener('click', (e: Event) => {
		const target = e.target as HTMLDivElement
		const input = target.parentElement?.firstElementChild as HTMLInputElement

		console.log(input.value)
	})
}
