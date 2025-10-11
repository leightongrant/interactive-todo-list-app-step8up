import header from './components/header.js'
import footer from './components/footer.js'
import layout from './components/layout.js'
import { renderMainContent, renderTasks } from './components/handlers.js'

const app = document.querySelector('#app') as HTMLDivElement
const appContainer = document.querySelector('.app-container') as HTMLDivElement
appContainer.innerHTML = `${layout(header(), footer())}`
app.append(appContainer)

const mainContent = document.querySelector('.main-content') as HTMLDivElement
const calendar = document.querySelector('div[name=date]') as HTMLButtonElement
const homeButton = document.querySelector('div[name=home]') as HTMLButtonElement
const dateModal = document.querySelector('#date-modal') as HTMLDialogElement
const cancelDateDialog = document.querySelector('#date-cancel') as HTMLButtonElement
const confirmDateDialog = document.querySelector('#date-confirm') as HTMLButtonElement

let timestamp = Date.now()
const currentDay = localStorage.getItem('day')
if (typeof currentDay === 'string') {
	timestamp = parseInt(currentDay)
	renderMainContent(mainContent, renderTasks(timestamp))
}

renderMainContent(mainContent, renderTasks(timestamp))

const dateInput = document.querySelector('input[name=date]') as HTMLInputElement
cancelDateDialog.addEventListener('click', () => dateModal.close())

confirmDateDialog.addEventListener('click', () => {
	const [year, month, day] = dateInput.value.split('-')
	const selectedTimestamp = new Date(parseInt(year), parseInt(month) - 1, parseInt(day)).getTime()
	localStorage.setItem('day', selectedTimestamp.toString())
	renderMainContent(mainContent, renderTasks(selectedTimestamp))
	dateModal.close()
})

calendar.addEventListener('click', () => {
	dateModal.showModal()
})

homeButton.addEventListener('click', () => {
	const timestamp = Date.now()
	localStorage.setItem('day', timestamp.toString())
	location.reload()
})

//const settings = document.querySelector('div[name=settings]') as HTMLButtonElement
//settings.addEventListener('click', (e: Event) => {})
