const layout = (header: string, main: string, footer: string): string => {
	return `
    <header>${header}<header>
    <main>${main}</main>
    <footer>${footer}</footer>

`
}
export default layout
