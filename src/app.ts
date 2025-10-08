import header from './components/header.js'
import footer from './components/footer.js'
import layout from './components/layout.js'
import main from './components/main.js'
import markCompleted from './components/completed.js'

const app = document.querySelector('#app') as HTMLDivElement
const appContainer = document.querySelector('.app-container') as HTMLDivElement

appContainer.innerHTML = `${layout(header(), main(), footer())}`
app.append(appContainer)

markCompleted()
