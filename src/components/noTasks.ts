import { database } from './icons.js'
const noTasks = () => {
	return `
        <div class="d-flex align-items-center justify-content-center h-100">
            <div class="text-center">${database()}<h2>Database Empty</h2></div>
        </div>
    `
}

export default noTasks
