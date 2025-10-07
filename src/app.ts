import header from './components/header.js'
import main from './components/main.js'
import footer from './components/footer.js'
import layout from './components/layout.js'

const app = document.querySelector('#app') as HTMLDivElement
app.innerHTML = `
    <div class="app-container">
        ${layout(header(), main(), footer())}
    </div>
`
