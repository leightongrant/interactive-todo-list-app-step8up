import header from './components/header.js'
import footer from './components/footer.js'
import layout from './components/layout.js'
import { renderMainContent, renderTasks } from './components/handlers.js'

const app = document.querySelector('#app') as HTMLDivElement
const appContainer = document.querySelector('.app-container') as HTMLDivElement
appContainer.innerHTML = `${layout(header(), footer())}`
app.append(appContainer)

const mainContent = document.querySelector('.main-content') as HTMLDivElement
const calendarButton = document.querySelector('div[name=date]') as HTMLButtonElement
const homeButton = document.querySelector('div[name=home]') as HTMLButtonElement
const settingsButton = document.querySelector('div[name=settings]') as HTMLButtonElement
const dateModal = document.querySelector('#date-modal') as HTMLDialogElement
const bodyElement = document.querySelector('body') as HTMLBodyElement
const cancelDateDialog = document.querySelector('#date-cancel') as HTMLButtonElement
const confirmDateDialog = document.querySelector('#date-confirm') as HTMLButtonElement
const settingsModal = document.querySelector('#settings-modal') as HTMLDialogElement
const cancelSettingsDialog = document.querySelector('#settings-cancel') as HTMLButtonElement
const confirmSettingsDialog = document.querySelector('#settings-confirm') as HTMLButtonElement
const settingsForm = document.querySelector('.settings-form') as HTMLFormElement

const themeName = localStorage.getItem('theme')
if (typeof themeName === 'string') {
	if (themeName === 'default') {
		bodyElement.removeAttribute('class')
	} else {
		bodyElement.classList.add(themeName)
	}
} else {
	bodyElement.removeAttribute('class')
}

let timestamp = Date.now()
const currentDay = localStorage.getItem('day')
if (typeof currentDay === 'string') {
	timestamp = parseInt(currentDay)
	renderMainContent(mainContent, renderTasks(timestamp))
}

renderMainContent(mainContent, renderTasks(timestamp))

calendarButton.addEventListener('click', () => {
	dateModal.showModal()
})

homeButton.addEventListener('click', () => {
	const timestamp = Date.now()
	localStorage.setItem('day', timestamp.toString())
	location.reload()
})

settingsButton.addEventListener('click', () => {
	settingsModal.showModal()
})

const dateInput = document.querySelector('input[name=date]') as HTMLInputElement
cancelDateDialog.addEventListener('click', () => dateModal.close())
cancelSettingsDialog.addEventListener('click', () => settingsModal.close())

confirmDateDialog.addEventListener('click', () => {
	const [year, month, day] = dateInput.value.split('-')
	const selectedTimestamp = new Date(parseInt(year), parseInt(month) - 1, parseInt(day)).getTime()
	localStorage.setItem('day', selectedTimestamp.toString())
	renderMainContent(mainContent, renderTasks(selectedTimestamp))
	dateModal.close()
})

confirmSettingsDialog.addEventListener('click', () => {
	settingsForm.requestSubmit()
})
settingsForm.addEventListener('submit', (e: Event) => {
	e.preventDefault()
	const target = e.target as HTMLFormElement
	localStorage.setItem('theme', target.theme.value)
	location.replace('/')
})
