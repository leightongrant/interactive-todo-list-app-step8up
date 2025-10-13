import header from './components/header.js'
import footer from './components/footer.js'
import layout from './components/layout.js'
import { renderMainContent, renderTasks, handleDelete } from './components/handlers.js'
declare const bootstrap: any

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
	location.reload()
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

// Delete Tasks
const deleteBtns = document.querySelectorAll('div[name=delete]') as NodeListOf<HTMLButtonElement>
deleteBtns.forEach(btn => {
	btn.addEventListener('click', (e: Event) => {
		try {
			const target = e.target as HTMLButtonElement
			if (!target) throw new Error('Button element not found!')
			const id = target.id

			const popover = new bootstrap.Popover(btn, {
				animation: true,
				content: `<button class="bi bi-check btn btn-outline-secondary btn-sm" type="button" name="cancel-delete">cancel</button><button class="bi bi-check btn btn-outline-warning btn-sm" type="button" name="confirm-delete" id="${id}">Delete?</button>`,
				delay: { show: 0, hide: 0 },
				html: true,
				allowList: {
					...bootstrap.Tooltip.Default.allowList,
					button: ['type', 'class', 'onclick', 'role', 'aria-label', 'name', 'id'],
				},
				trigger: 'manual',
				position: 'top',
			})

			popover.show()

			const handleClick = (e: Event) => {
				const target = e.target as HTMLButtonElement
				if (target) {
					if (target.name === 'confirm-delete') {
						handleDelete(target.id)
						document.removeEventListener('click', handleClick)
						popover.hide()
					}

					if (target.name === 'cancel-delete') {
						document.removeEventListener('click', handleClick)
						popover.hide()
					}
				}
			}
			document.addEventListener('click', handleClick)
		} catch (error: any) {
			console.log(error.message)
		}
	})
})
