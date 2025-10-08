const generateId = (idLength = 10): string => {
	const chars: string[] = []
	let id = ''
	for (let n = 0; n <= 9; n++) {
		chars.push(n.toString())
	}
	for (let n = 65; n <= 90; n++) {
		chars.push(String.fromCharCode(n))
	}
	for (let n = 97; n <= 122; n++) {
		chars.push(String.fromCharCode(n))
	}
	for (let i = 1; i <= idLength; i++) {
		const idx = Math.floor(Math.random() * chars.length)
		id += chars[idx]
	}

	return id
}

export default generateId
