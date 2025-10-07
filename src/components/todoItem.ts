const todoItem = (item: string) => {
	return `
    <div class="item-wrapper border border-1 d-flex p-1 rounded-4">
        <button>completed</button>
        <textarea class="flex-grow-1 border-0 bg-transparent py-1 px-3">${item}</textarea>
        <button>delete</button>
        <button>edit</button>
    </div>
    
    `
}

export default todoItem
