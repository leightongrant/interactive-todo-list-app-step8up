import { homeIcon, calendarIcon, settingsIcon } from './icons.js'
const footer = () => {
	return `
        <div class="flex-grow-1 text-center">
            <div>
                <button type="button" name="home" class="bg-transparent border-0 fs-1">
                    ${homeIcon()}
                </button>
                <span class="d-block">Home</span>
            </div>
        </div>
        <div class="flex-grow-1 text-center">
            <div>
                <button type="button" name="date" class="bg-transparent border-0 fs-1">
                    ${calendarIcon()}
                </button>
                <span class="d-block">Date</span>
            </div>
        </div>
        <div class="flex-grow-1 text-center">
            <div>
                <button type="button" name="settings" class="bg-transparent border-0 fs-1">
                    ${settingsIcon()}
                </button>
                <span class="d-block">Settings</span>
            </div>
        </div>
        `
}

export default footer
