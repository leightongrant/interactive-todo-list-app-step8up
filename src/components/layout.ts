const layout = (header: string, main: string, footer: string): string => {
	return `
    <header>
        <div class="container-fluid">
            <div class="header-content p-5">
                ${header}
            </div>
        </div>
    </header>
    <main>
        <div class="container-fluid">
            <div class="main-content px-5 py-1 d-grid gap-2">
                ${main}
            </div>
        </div>
    </main>
    <footer>
        <div class="container-fluid">
            <div class="footer-content d-flex gap-5 flex-fill">
                ${footer}
            </div>
        </div>
    </footer>

`
}
export default layout
