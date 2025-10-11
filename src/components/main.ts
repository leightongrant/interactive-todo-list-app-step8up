import { renderTasks } from './handlers.js'

const main = (timestamp: number): string => {
	return renderTasks(timestamp)
}

export default main
