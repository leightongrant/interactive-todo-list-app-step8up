import { homeIcon, calendarIcon, settingsIcon } from './icons.js'
const footer = () => {
	return `
        <div class="flex-grow-1 text-center">
            <div>
                ${homeIcon()}                
            </div>
        </div>
        <div class="flex-grow-1 text-center">
            <div>              
                ${calendarIcon()}               
            </div>
        </div>
        <div class="flex-grow-1 text-center">
            <div>               
                ${settingsIcon()}                
            </div>
        </div>
        `
}

export default footer
