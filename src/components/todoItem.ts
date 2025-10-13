import { circleIcon, editIcon, deleteIcon, checkCircleIcon, saveIcon } from './icons.js'
import type { TodoData } from '../types.js'

const todoItem = (todo: TodoData) => {
	return `
    <div class="item-wrapper d-flex p-1 rounded-4 align-items-center" id="task-wrapper-${todo.id}">
        ${todo.isCompleted ? checkCircleIcon(todo.id) : circleIcon(todo.id)}
        <textarea class="fs-4 text-muted border-0 bg-transparent py-1 px-3 overflow-hidden ${
			todo.isCompleted && 'text-decoration-line-through'
		}" rows="1" readonly id="task-${todo.id}" title="Todo">${todo.title}</textarea>        
        ${editIcon(todo.id)}
        ${deleteIcon(todo.id)}
    </div>
    
    `
}

export default todoItem
