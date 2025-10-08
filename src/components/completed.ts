import todoData from '../db.js'

const markCompleted = () => {
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

export default markCompleted
