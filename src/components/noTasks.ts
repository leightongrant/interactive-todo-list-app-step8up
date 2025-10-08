import { database } from './icons.js'
const noTasks = () => {
	return `
        <div class="d-flex align-items-center justify-content-center h-100">
            <div class="text-center text-muted">${database()}<h2>Task List Empty</h2></div>
        </div>
    `
}

export default noTasks
