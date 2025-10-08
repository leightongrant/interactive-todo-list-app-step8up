const todoItem = (item: string) => {
	return `
    <div class="item-wrapper border border-1 d-flex p-1 rounded-4">
        <button>c</button>
        <textarea class=" border-0 bg-transparent py-1 px-3">${item}</textarea>
        <button>d</button>
        <button>e</button>
    </div>
    
    `
}

export default todoItem
