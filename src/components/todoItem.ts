import { circleIcon, editIcon, deleteIcon, checkCircleIcon } from './icons.js'
import type { TodoData } from '../db.js'

const todoItem = (todo: TodoData) => {
	return `
    <div class="item-wrapper border border-1 d-flex p-1 rounded-4 align-items-center" id="${todo.id}">
        ${todo.isCompleted ? checkCircleIcon() : circleIcon()}
        <textarea class="border-0 bg-transparent py-1 px-3 overflow-hidden ${
			todo.isCompleted && 'text-decoration-line-through'
		}" rows="1" maxlength="20" readonly id="txtarea-${todo.id}" title="Todo">${todo.title}</textarea>        
        ${editIcon()}
        ${deleteIcon()}
    </div>
    
    `
}

export default todoItem

// <button type="button" name="edit" class="border-0 bg-transparent fs-2" title="Edit">
//</button>
//<button type="button" name="delete" class="border-0 bg-transparent fs-2" title="Delete">
//</button>
