import { circleIcon, editIcon, deleteIcon } from './icons.js'
const todoItem = (item: string) => {
	return `
    <div class="item-wrapper border border-1 d-flex p-1 rounded-4">
        <button type="button" name="completed" class="border-0 bg-transparent fs-1">${circleIcon()}</button>
        <textarea class="border-0 bg-transparent py-1 px-3 overflow-hidden" rows="1" maxlength="20" readonly>${item}</textarea>        
        <button type="button" name="edit" class="border-0 bg-transparent fs-2">${editIcon()}</button>
        <button type="button" name="delete" class="border-0 bg-transparent fs-2">${deleteIcon()}</button>
    </div>
    
    `
}

export default todoItem
