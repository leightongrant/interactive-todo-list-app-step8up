import header from './components/header.js'
import footer from './components/footer.js'
import layout from './components/layout.js'
import main from './components/main.js'
import { handleCompleted, handleNewTasks, handleDelete, handleEdit } from './components/handlers.js'

const app = document.querySelector('#app') as HTMLDivElement
const appContainer = document.querySelector('.app-container') as HTMLDivElement

appContainer.innerHTML = `${layout(header(), main(), footer())}`
app.append(appContainer)

handleCompleted()
handleNewTasks()
handleDelete()
handleEdit()

const homeButton = document.querySelector('div[name=home]') as HTMLButtonElement
homeButton.addEventListener('click', () => {
	const timestamp = Date.now()
	const today = new Date(timestamp).toLocaleDateString()
	console.log(today)
})

const calendar = document.querySelector('div[name=date]') as HTMLButtonElement
calendar.addEventListener('click', (e: Event) => {})

const settings = document.querySelector('div[name=settings]') as HTMLButtonElement
settings.addEventListener('click', (e: Event) => {})

//const todoModal = document.querySelector('#todoModal') as HTMLDivElement

const okBtn = document.querySelector('.ok-btn') as HTMLButtonElement
okBtn.addEventListener('click', (e: Event) => {
	const target = e.target as HTMLButtonElement
	console.log(target.dataset)
})
