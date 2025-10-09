import { circleArrowUpIcon } from './icons.js'
const newTask = () => {
	return `<input name="new" id="new" title="Add new todo" class="fs-4 w-100 bg-transparent px-4 py-3 border-0 rounded-4" placeholder="Add a new task" />${circleArrowUpIcon()}`
}

export default newTask
