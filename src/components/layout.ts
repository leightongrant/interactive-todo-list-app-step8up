const layout = (header: string, main: string, footer: string): string => {
	return `
    <header class="sticky-top">
        <div class="container-fluid">
            <div class="header-content py-2 px-5">
                ${header}
            </div>
        </div>
    </header>
    <main class="overflow-y-scroll">
        <div class="container-fluid">
            <div class="main-content px-5 py-4 d-grid gap-2">
                ${main}
            </div>
        </div>
    </main>
    <footer class="sticky-bottom">
        <div class="container-fluid">
            <div class="footer-content d-flex gap-5 flex-fill">
                ${footer}
            </div>
        </div>
    </footer>

`
}
export default layout
