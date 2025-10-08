import { circleArrowUpIcon } from './icons.js'
const layout = (header: string, main: string, footer: string): string => {
	return `
    <header class="sticky-top">
        <div class="container-fluid">
            <div class="header-content py-2 px-5">
                ${header}
            </div>
        </div>
    </header>
    <main class="overflow-y-none">
        <div class="container-fluid d-grid content-wrapper">
            <div class="new-task-wrapper px-xl-5 py-4">
                <div class="new-task d-flex rounded-4 border border-1 pe-3 align-items-center">
                    <input name="new" id="new" title="Add new todo" class="w-100 bg-transparent px-3 py-3 border-0 rounded-4" placeholder="Add a new task" />${circleArrowUpIcon()}
                </div>
            </div>            
                <div class="main-content px-xl-5 py-4 h-100">
                    ${main}
                </div>            
        </div>
    </main>
    <footer class="sticky-bottom text-light py-2">
        <div class="container-fluid">
            <div class="footer-content d-flex gap-5 flex-fill">
                ${footer}
            </div>
        </div>
    </footer>

`
}
export default layout
