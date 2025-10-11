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
const dateModal = document.querySelector('#date-modal') as HTMLDialogElement
const cancelDateDialog = document.querySelector('#date-cancel') as HTMLButtonElement
const confirmDateDialog = document.querySelector('#date-confirm') as HTMLButtonElement

let timestamp = 0
const currentDay = localStorage.getItem('day')
if (typeof currentDay === 'string') {
	timestamp = parseInt(currentDay)
} else {
	timestamp = Date.now()
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

// function openCheck(favDialog: any) {
// 	if (favDialog.open) {
// 		cancelDialog.addEventListener('click', () => favDialog.close())
// 	} else {
// 		console.log('Dialog closed')
// 	}
// }

// cancelDialog.addEventListener('click', () => favDialog.close())
// confirmDialog.addEventListener('click', () => {
// 	console.log('confirmed')
// 	favDialog.close()
// })

// calendar.addEventListener('click', (e: Event) => {
// 	favDialog.showModal()

// const homeButton = document.querySelector('div[name=home]') as HTMLButtonElement
// homeButton.addEventListener('click', () => {
// 	const timestamp = Date.now()
// 	const today = new Date(timestamp).toLocaleDateString()
// 	console.log(today)
// })

// const okBtn = document.querySelector('.ok-btn') as HTMLButtonElement
// const eventHandler = (e: Event) => {
// 	const dateInput = document.querySelector('input[name=date]') as HTMLInputElement
// 	const [year, month, day] = dateInput.value.split('-')
// 	const selectedTimestamp = new Date(2025, 9, 10).getTime()
// 	console.log('clicked', year, month, day)
// 	renderPage(1760078283629)
// const dateLs = new Date(1760078283629).toLocaleDateString()
// const dateSl = new Date(selectedTimestamp).toLocaleDateString()
// console.log(dateLs === dateSl)
// console.log(1760078283629, selectedTimestamp)
// const target = e.target as HTMLButtonElement
// console.log(target)
// }
// okBtn.addEventListener('click', eventHandler)
//})

//const settings = document.querySelector('div[name=settings]') as HTMLButtonElement
//settings.addEventListener('click', (e: Event) => {})

// handleCompleted()
// handleNewTasks()
// handleDelete()
// handleEdit()
